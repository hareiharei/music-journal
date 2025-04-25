import { LiveEvent, LiveEventID } from "@/modules/domain/LiveEvent/LiveEvent"
import { v4 as uuidv4 } from 'uuid'
import { PrismaClient, Prisma, LiveEventVenue as LiveEventVenueModel, LiveEventArtist as LiveEventArtistModel } from '@prisma/client'
import { isEmptyList } from "@/shared/util/check"
import { Venue } from "@/modules/domain/Venue/Venue"

const prisma = new PrismaClient()

export class LiveEventRepository {
  static async store(liveEvent: LiveEvent) {
    await prisma.$transaction(async (tx) => {
      LiveEventTable.upsert(tx, liveEvent)
      LiveEventVenueTable.upsert(tx, liveEvent)
      LiveEventArtistTable.upsert(tx, liveEvent)
    })
  }
}

class LiveEventTable {
  static async upsert(
    tx: Prisma.TransactionClient,
    liveEvent: LiveEvent
  ) {
    const liveEventCreateData: Prisma.LiveEventCreateInput = {
      liveEventId: liveEvent.id.value,
      title: liveEvent.title.value,
      date: liveEvent.date.value,
      startTime: liveEvent.startTime?.value,
      endTime: liveEvent.endTime?.value,
      detail: liveEvent.detail?.value,
      review: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    }

    const liveEventUpdateData: Prisma.LiveEventUpdateInput = {
      title: liveEvent.title.value,
      date: liveEvent.date.value,
      startTime: liveEvent.startTime?.value,
      endTime: liveEvent.endTime?.value,
      detail: liveEvent.detail?.value,
      updatedAt: new Date(),
    }

    await tx.liveEvent.upsert({
      where: {
        liveEventId: liveEvent.id.value
      },
      update: liveEventUpdateData,
      create: liveEventCreateData,
    })
  }
}

class LiveEventVenueTable {

  static async getByLiveEventId(
    liveEventID: LiveEventID,
  ): Promise<LiveEventVenueModel[]> {
    const venues: LiveEventVenueModel[] = await prisma.liveEventVenue.findMany({
      where: {
        liveEventId: liveEventID.value,
        deletedAt: null,
      },
      orderBy: [
        { name: 'asc' },
        { addressUrl: 'asc' },
      ],
    })

    return venues
  }

  static async upsert(
    tx: Prisma.TransactionClient,
    liveEvent: LiveEvent,
  ) {
    const venues: Venue[] | null = liveEvent.venues

    const venuesInput: Prisma.LiveEventVenueCreateManyInput[] | null = 
      venues?.map((venue) => {
        return {
          liveEventVenueId: uuidv4(),
          liveEventId: liveEvent.id.value,
          name: venue.name.value,
          addressUrl: venue.addressURL?.value ?? null,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        }
      }) ?? null

    const venuesFromStore: LiveEventVenueModel[] = await this.getByLiveEventId(liveEvent.id)

    // 現在も新規も空　→ 何もしない
    if (isEmptyList(venuesFromStore) && venuesInput === null) return

    // 現在が空で、新規が存在　→　一括Create
    if (isEmptyList(venuesFromStore) && venuesInput !== null) {
      await tx.liveEventVenue.createMany({ data: venuesInput })
      return
    }

    // 現在が存在し、新規が空　→　全削除
    if (venuesInput === null) {
      await this.deleteByLiveEventId(tx, liveEvent.id)
      return
    }

    // 現在と新規の差分を求める
    const venuesOnlyInStore: LiveEventVenueModel[] = venuesFromStore.filter(
      venueFromStore => !venuesInput.some(
        venueInput => 
          venueInput.name === venueFromStore.name && 
          venueInput.addressUrl === venueFromStore.addressUrl
      )
    )

    const venuesOnlyInInput: Prisma.LiveEventVenueCreateManyInput[] = venuesInput.filter(
      venueInput => !venuesFromStore.some(
        venueFromStore =>
          venueFromStore.name === venueInput.name &&
          venueFromStore.addressUrl === venueInput.addressUrl
      )
    )

    // 現在と新規に差分がない　→　何もしない
    if (isEmptyList(venuesOnlyInStore) && isEmptyList(venuesOnlyInInput)) return

    // 現在にあって、新規にないものがある　→　それをdelete
    if (!isEmptyList(venuesOnlyInStore)) {
      await Promise.all(venuesOnlyInStore.map(venue =>
        this.delete(tx, liveEvent.id, venue.name, venue.addressUrl)
      ))
    }

    // 現在にあって、新規にあるものがある　→　それをcreate
    if (!isEmptyList(venuesOnlyInInput)) {
      await tx.liveEventVenue.createMany({ data: venuesOnlyInInput })
    }
  }

  static async deleteByLiveEventId(
    tx: Prisma.TransactionClient,
    liveEventID: LiveEventID,
  ) {
    await tx.liveEventVenue.updateMany({
      where: {
        liveEventId: liveEventID.value,
      },
      data: {
        deletedAt: new Date(),
      },
    })
  }

  static async delete(
    tx: Prisma.TransactionClient,
    liveEventID: LiveEventID,
    name: string,
    addressURL: string | null,
  ) {
    await tx.liveEventVenue.updateMany({
      where: {
        liveEventId: liveEventID.value,
        name: name,
        addressUrl: addressURL,
      },
      data: {
        deletedAt: new Date(),
      },
    })
  }
}

class LiveEventArtistTable {
  static async getByLiveEventId(
    liveEventID: LiveEventID,
  ) {
    const artists = await prisma.liveEventArtist.findMany({
      where: {
        liveEventId: liveEventID.value,
        deletedAt: null,
      },
      orderBy: [
        { name: 'asc' },
        { spotifyArtistUrl: 'asc' },
      ],
    })

    return artists
  }

  static async upsert(
    tx: Prisma.TransactionClient,
    liveEvent: LiveEvent,
  ) {
    const artists = liveEvent.artists

    const artistsInput: Prisma.LiveEventArtistCreateManyInput[] | null =
      artists?.map((artist) => {
        return {
          liveEventArtistId: uuidv4(),
          liveEventId: liveEvent.id.value,
          name: artist.name.value,
          spotifyArtistUrl: artist.spotifyArtistURL?.value ?? null,
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null,
        }
      }) ?? null

    const artistsFromStore: LiveEventArtistModel[] = await this.getByLiveEventId(liveEvent.id)

    // 現在も新規も空　→ 何もしない
    if (isEmptyList(artistsFromStore) && artistsInput === null) return

    // 現在が空で、新規が存在　→　一括Create
    if (isEmptyList(artistsFromStore) && artistsInput !== null) {
      await tx.liveEventArtist.createMany({ data: artistsInput })
      return
    }

    // 現在が存在し、新規が空　→　全削除
    if (artistsInput === null) {
      await this.deleteByLiveEventId(tx, liveEvent.id)
      return
    }

    // 現在と新規の差分を求める
    const artistsOnlyInStore: LiveEventArtistModel[] = artistsFromStore.filter(
      artistFromStore => !artistsInput.some(
        artistInput => 
          artistInput.name === artistFromStore.name && 
          artistInput.spotifyArtistUrl === artistFromStore.spotifyArtistUrl
      )
    )

    const artistsOnlyInInput: Prisma.LiveEventArtistCreateManyInput[] = artistsInput.filter(
      artistInput => !artistsFromStore.some(
        artistFromStore =>
          artistFromStore.name === artistInput.name &&
          artistFromStore.spotifyArtistUrl === artistInput.spotifyArtistUrl
      )
    )

    // 現在と新規に差分がない　→　何もしない
    if (isEmptyList(artistsOnlyInStore) && isEmptyList(artistsOnlyInInput)) return

    // 現在にあって、新規にないものがある　→　それをdelete
    if (!isEmptyList(artistsOnlyInStore)) {
      await Promise.all(artistsOnlyInStore.map(venue =>
        this.delete(tx, liveEvent.id, venue.name, venue.spotifyArtistUrl)
      ))
    }

    // 現在にあって、新規にあるものがある　→　それをcreate
    if (!isEmptyList(artistsOnlyInInput)) {
      await tx.liveEventArtist.createMany({ data: artistsOnlyInInput })
    }
  }

  static async deleteByLiveEventId(
    tx: Prisma.TransactionClient,
    liveEventID: LiveEventID,
  ) {
    await tx.liveEventArtist.updateMany({
      where: {
        liveEventId: liveEventID.value,
      },
      data: {
        deletedAt: new Date(),
      },
    })
  }

  static async delete(
    tx: Prisma.TransactionClient,
    liveEventID: LiveEventID,
    name: string,
    spotifyArtistURL: string | null,
  ) {
    await tx.liveEventArtist.updateMany({
      where: {
        liveEventId: liveEventID.value,
        name: name,
        spotifyArtistUrl: spotifyArtistURL,
      },
      data: {
        deletedAt: new Date(),
      },
    })
  }
}