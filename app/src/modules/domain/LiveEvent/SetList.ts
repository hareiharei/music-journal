import { Song } from '@/modules/domain/Song/Song'
import { UUIDValueObject } from '../../../shared/domain/UUIDValueObject';
import { LiveEventID } from './LiveEvent';
import { isEmptyList } from '@/shared/util/check';

export class SetListProps {
  protected constructor(
    public readonly id: SetListID,
    public readonly liveEventID: LiveEventID,
    public songs: SetListSong[],
  ) {}
}

export class SetList extends SetListProps {
  private constructor(
    public readonly id: SetListID,
    public readonly liveEventID: LiveEventID,
    public songs: SetListSong[],
  ) {
    super(id, liveEventID, songs)

    if (isEmptyList(songs)) throw new Error('Songs should not be an empty list')

    const isSequentialOrder: boolean = songs.every((song, index) => song.order.value === index)
    if (!isSequentialOrder) throw new Error('Songs should be in sequential order starting from 0')
  }
  
  static create(
    liveEventID: LiveEventID,
    songs: SetListSong[],
  ): SetList {
    return new SetList(
      SetListID.new(),
      liveEventID,
      songs,
    )
  }

  static fromStore(
    id: string,
    liveEventID: string,
    songs: SetListSong[],
  ): SetList {
    return new SetList(
      SetListID.of(id),
      LiveEventID.of(liveEventID),
      songs,
    )
  }

  edit(
    songs: SetListSong[],
  ): SetList {
    return new SetList(
      this.id,
      this.liveEventID,
      songs,
    )
  }

  delete(): DeletedSetList {
    return DeletedSetList.of(
      this.id,
      this.liveEventID,
      this.songs,
    )
  }
}

export class DeletedSetList extends SetListProps {
  private constructor(
    public readonly id: SetListID,
    public readonly liveEventID: LiveEventID,
    public songs: SetListSong[],
  ) {
    super(id, liveEventID, songs)
  }

  static of(
    id: SetListID,
    liveEventID: LiveEventID,
    songs: SetListSong[],
  ): DeletedSetList {
    return new DeletedSetList(
      id,
      liveEventID,
      songs,
    )
  }
}

export class SetListSong {
  private constructor(
    public readonly id: SetListSongID,
    public order: SetListSongOrder,
    public song: Song,
  ) {}

  static of(
    order: number,
    song: Song,
  ): SetListSong {
    return new SetListSong(
      SetListSongID.new(),
      SetListSongOrder.of(order),
      song,
    )
  }

  static fromStore(
    id: string,
    order: number,
    song: Song,
  ): SetListSong {
    return new SetListSong(
      SetListSongID.of(id),
      SetListSongOrder.of(order),
      song,
    )
  }
}

export class SetListID extends UUIDValueObject {}

export class SetListSongID extends UUIDValueObject {}

export class SetListSongOrder {
  private constructor(
    public readonly value: number,
  ) {
    if (value < 0) throw new Error('Set List Song Order should be greater than or equal to 0')

    if (!Number.isInteger(value)) throw new Error('Set List Song Order should be an integer')
  }

  static of(value: number): SetListSongOrder {
    return new SetListSongOrder(value)
  }
}