import { Artist } from "@/modules/domain/Artist/Artist"
import { DeletedLiveEvent, LiveEvent, LiveEventDate, LiveEventDetail, LiveEventEndTime, LiveEventID, LiveEventStartTime, LiveEventTitle } from "@/modules/domain/LiveEvent/LiveEvent"
import { Venue } from "@/modules/domain/Venue/Venue"
import { v4 as uuidv4 } from 'uuid'

describe('LiveEvent', () => {
  describe('create', () => {
    it('should instantiate when startTime, endTime, detail, venues, and artists are non-empty strings or lists', () => {
      const title = 'live event title'
      const date = new Date()
      const startTime = '08:12:00'
      const endTime = '15:27:00'
      const detail = 'live event detail'
      const venues = [Venue.of('venue name', 'address/url')]
      const artists = [Artist.of('artist name', 'spotify/artist/url')]
      const liveEvent = LiveEvent.create(
        title, date, startTime, endTime, detail, venues, artists,
      )

      expect(liveEvent).toBeInstanceOf(LiveEvent)
      expect(liveEvent.id).toStrictEqual(LiveEventID.of(liveEvent.id.value))
      expect(liveEvent.title).toStrictEqual(LiveEventTitle.of(title))
      expect(liveEvent.date).toStrictEqual(LiveEventDate.of(date))
      expect(liveEvent.startTime).toStrictEqual(LiveEventStartTime.of(startTime))
      expect(liveEvent.endTime).toStrictEqual(LiveEventEndTime.of(endTime))
      expect(liveEvent.detail).toStrictEqual(LiveEventDetail.of(detail))
      expect(liveEvent.venues).toStrictEqual(venues)
      expect(liveEvent.artists).toStrictEqual(artists)
    })
    it('should instantiate when startTime, endTime, detail, venues, and artists are empty strings or lists', () => {
      const title = 'live event title'
      const date = new Date()
      const startTime = ''
      const endTime = ''
      const detail = ''
      const venues: Venue[] = []
      const artists: Artist[] = []
      const liveEvent = LiveEvent.create(
        title, date, startTime, endTime, detail, venues, artists,
      )

      expect(liveEvent).toBeInstanceOf(LiveEvent)
      expect(liveEvent.id).toStrictEqual(LiveEventID.of(liveEvent.id.value))
      expect(liveEvent.title).toStrictEqual(LiveEventTitle.of(title))
      expect(liveEvent.date).toStrictEqual(LiveEventDate.of(date))
      expect(liveEvent.startTime).toBe(null)
      expect(liveEvent.endTime).toBe(null)
      expect(liveEvent.detail).toBe(null)
      expect(liveEvent.venues).toBe(null)
      expect(liveEvent.artists).toBe(null)
    })
    it('should instantiate when startTime, endTime, detail, venues, and artists are null', () => {
      const title = 'live event title'
      const date = new Date()
      const startTime = null
      const endTime = null
      const detail = null
      const venues = null
      const artists = null
      const liveEvent = LiveEvent.create(
        title, date, startTime, endTime, detail, venues, artists,
      )

      expect(liveEvent).toBeInstanceOf(LiveEvent)
      expect(liveEvent.id).toStrictEqual(LiveEventID.of(liveEvent.id.value))
      expect(liveEvent.title).toStrictEqual(LiveEventTitle.of(title))
      expect(liveEvent.date).toStrictEqual(LiveEventDate.of(date))
      expect(liveEvent.startTime).toBe(null)
      expect(liveEvent.endTime).toBe(null)
      expect(liveEvent.detail).toBe(null)
      expect(liveEvent.venues).toBe(null)
      expect(liveEvent.artists).toBe(null)
    })
    it('should return error when endTime is before startTime', () => {
      const title = 'live event title'
      const date = new Date()
      const startTime = '08:12:00'
      const endTime = '07:27:00'
      const detail = 'live event detail'
      const venues = [Venue.of('venue name', 'address/url')]
      const artists = [Artist.of('artist name', 'spotify/artist/url')]

      expect(() => 
        LiveEvent.create(
          title, date, startTime, endTime, detail, venues, artists,
        )
      ).toThrow('endTime is before startTime')
    })
  })
  describe('fromStore', () => {
    it('should instantiate when startTime, endTime, detail, venues, and artists are non-empty strings or lists', () => {
      const id = uuidv4()
      const title = 'live event title'
      const date = new Date()
      const startTime = '08:12:00'
      const endTime = '15:27:00'
      const detail = 'live event detail'
      const venues = [Venue.of('venue name', 'address/url')]
      const artists = [Artist.of('artist name', 'spotify/artist/url')]
      const liveEvent = LiveEvent.fromStore(
        id, title, date, startTime, endTime, detail, venues, artists,
      )

      expect(liveEvent).toBeInstanceOf(LiveEvent)
      expect(liveEvent.id).toStrictEqual(LiveEventID.of(id))
      expect(liveEvent.title).toStrictEqual(LiveEventTitle.of(title))
      expect(liveEvent.date).toStrictEqual(LiveEventDate.of(date))
      expect(liveEvent.startTime).toStrictEqual(LiveEventStartTime.of(startTime))
      expect(liveEvent.endTime).toStrictEqual(LiveEventEndTime.of(endTime))
      expect(liveEvent.detail).toStrictEqual(LiveEventDetail.of(detail))
      expect(liveEvent.venues).toStrictEqual(venues)
      expect(liveEvent.artists).toStrictEqual(artists)
    })
    it('should instantiate when startTime, endTime, detail, venues, and artists are empty strings or lists', () => {
      const id = uuidv4()
      const title = 'live event title'
      const date = new Date()
      const startTime = ''
      const endTime = ''
      const detail = ''
      const venues: Venue[] = []
      const artists: Artist[] = []
      const liveEvent = LiveEvent.fromStore(
        id, title, date, startTime, endTime, detail, venues, artists,
      )

      expect(liveEvent).toBeInstanceOf(LiveEvent)
      expect(liveEvent.id).toStrictEqual(LiveEventID.of(id))
      expect(liveEvent.title).toStrictEqual(LiveEventTitle.of(title))
      expect(liveEvent.date).toStrictEqual(LiveEventDate.of(date))
      expect(liveEvent.startTime).toBe(null)
      expect(liveEvent.endTime).toBe(null)
      expect(liveEvent.detail).toBe(null)
      expect(liveEvent.venues).toBe(null)
      expect(liveEvent.artists).toBe(null)
    })
    it('should instantiate when startTime, endTime, detail, venues, and artists are null', () => {
      const id = uuidv4()
      const title = 'live event title'
      const date = new Date()
      const startTime = null
      const endTime = null
      const detail = null
      const venues = null
      const artists = null
      const liveEvent = LiveEvent.fromStore(
        id, title, date, startTime, endTime, detail, venues, artists,
      )

      expect(liveEvent).toBeInstanceOf(LiveEvent)
      expect(liveEvent.id).toStrictEqual(LiveEventID.of(id))
      expect(liveEvent.title).toStrictEqual(LiveEventTitle.of(title))
      expect(liveEvent.date).toStrictEqual(LiveEventDate.of(date))
      expect(liveEvent.startTime).toBe(null)
      expect(liveEvent.endTime).toBe(null)
      expect(liveEvent.detail).toBe(null)
      expect(liveEvent.venues).toBe(null)
      expect(liveEvent.artists).toBe(null)
    })
    it('should return error when endTime is before startTime', () => {
      const id = uuidv4()
      const title = 'live event title'
      const date = new Date()
      const startTime = '08:12:00'
      const endTime = '07:27:00'
      const detail = 'live event detail'
      const venues = [Venue.of('venue name', 'address/url')]
      const artists = [Artist.of('artist name', 'spotify/artist/url')]

      expect(() => 
        LiveEvent.fromStore(
          id, title, date, startTime, endTime, detail, venues, artists,
        )  
      ).toThrow('endTime is before startTime')
    })
  })
  describe('edit', () => {
    it('should update when startTime, endTime, detail, venues, and artists are non-empty strings or lists', () => {
      const liveEvent = LiveEvent.create(
        'live event title',
        new Date(),
        '08:12:00',
        '15:27:00',
        'live event detail',
        [Venue.of('venue name', 'address/url')],
        [Artist.of('artist name', 'spotify/artist/url')],
      )
      const title = 'new live event title'
      const date = new Date()
      const startTime = '08:34:00'
      const endTime = '09:15:00'
      const detail = 'new live event detail'
      const venues = [Venue.of('new venue name', 'new/address/url')]
      const artists = [Artist.of('new artist name', 'new/spotify/artist/url')]
      const newLiveEvent = liveEvent.edit(
        title, date, startTime, endTime, detail, venues, artists,
      )

      expect(newLiveEvent).toBeInstanceOf(LiveEvent)
      expect(newLiveEvent.id).toStrictEqual(LiveEventID.of(liveEvent.id.value))
      expect(newLiveEvent.title).toStrictEqual(LiveEventTitle.of(title))
      expect(newLiveEvent.date).toStrictEqual(LiveEventDate.of(date))
      expect(newLiveEvent.startTime).toStrictEqual(LiveEventStartTime.of(startTime))
      expect(newLiveEvent.endTime).toStrictEqual(LiveEventEndTime.of(endTime))
      expect(newLiveEvent.detail).toStrictEqual(LiveEventDetail.of(detail))
      expect(newLiveEvent.venues).toStrictEqual(venues)
      expect(newLiveEvent.artists).toStrictEqual(artists)
    })
    it('should update when startTime, endTime, detail, venues, and artists are empty strings or lists', () => {
      const liveEvent = LiveEvent.create(
        'live event title',
        new Date(),
        '08:12:00',
        '15:27:00',
        'live event detail',
        [Venue.of('venue name', 'address/url')],
        [Artist.of('artist name', 'spotify/artist/url')],
      )
      const title = 'live event title'
      const date = new Date()
      const startTime = ''
      const endTime = ''
      const detail = ''
      const venues: Venue[] = []
      const artists: Artist[] = []
      const newLiveEvent = liveEvent.edit(
        title, date, startTime, endTime, detail, venues, artists,
      )

      expect(newLiveEvent).toBeInstanceOf(LiveEvent)
      expect(newLiveEvent.id).toStrictEqual(LiveEventID.of(liveEvent.id.value))
      expect(newLiveEvent.title).toStrictEqual(LiveEventTitle.of(title))
      expect(newLiveEvent.date).toStrictEqual(LiveEventDate.of(date))
      expect(newLiveEvent.startTime).toBe(null)
      expect(newLiveEvent.endTime).toBe(null)
      expect(newLiveEvent.detail).toBe(null)
      expect(newLiveEvent.venues).toBe(null)
      expect(newLiveEvent.artists).toBe(null)
    })
    it('should update when startTime, endTime, detail, venues, and artists are null', () => {
      const liveEvent = LiveEvent.create(
        'live event title',
        new Date(),
        '08:12:00',
        '15:27:00',
        'live event detail',
        [Venue.of('venue name', 'address/url')],
        [Artist.of('artist name', 'spotify/artist/url')],
      )
      const title = 'live event title'
      const date = new Date()
      const startTime = null
      const endTime = null
      const detail = null
      const venues = null
      const artists = null
      const newLiveEvent = liveEvent.edit(
        title, date, startTime, endTime, detail, venues, artists,
      )

      expect(newLiveEvent).toBeInstanceOf(LiveEvent)
      expect(newLiveEvent.id).toStrictEqual(LiveEventID.of(liveEvent.id.value))
      expect(newLiveEvent.title).toStrictEqual(LiveEventTitle.of(title))
      expect(newLiveEvent.date).toStrictEqual(LiveEventDate.of(date))
      expect(newLiveEvent.startTime).toBe(null)
      expect(newLiveEvent.endTime).toBe(null)
      expect(newLiveEvent.detail).toBe(null)
      expect(newLiveEvent.venues).toBe(null)
      expect(newLiveEvent.artists).toBe(null)
    })
    it('should return error when endTime is before startTime', () => {
      const liveEvent = LiveEvent.create(
        'live event title',
        new Date(),
        '08:12:00',
        '15:27:00',
        'live event detail',
        [Venue.of('venue name', 'address/url')],
        [Artist.of('artist name', 'spotify/artist/url')],
      )
      const title = 'live event title'
      const date = new Date()
      const startTime = '08:12:00'
      const endTime = '07:27:00'
      const detail = 'live event detail'
      const venues = [Venue.of('venue name', 'address/url')]
      const artists = [Artist.of('artist name', 'spotify/artist/url')]

      expect(() => 
        liveEvent.edit(
          title, date, startTime, endTime, detail, venues, artists,
        )
      ).toThrow('endTime is before startTime')
    })
  })
  describe('delete', () => {
    it('should return DeletedLiveEvent', () => {
      const liveEvent = LiveEvent.create(
        'live event title',
        new Date(),
        '08:12:00',
        '15:27:00',
        'live event detail',
        [Venue.of('venue name', 'address/url')],
        [Artist.of('artist name', 'spotify/artist/url')],
      )
      const deletedLiveEvent = liveEvent.delete()

      const expectedDeletedLiveEvent = DeletedLiveEvent.of(
        liveEvent.id,
        liveEvent.title,
        liveEvent.date,
        liveEvent.startTime,
        liveEvent.endTime,
        liveEvent.detail,
        liveEvent.venues,
        liveEvent.artists,
      )

      expect(deletedLiveEvent).toStrictEqual(expectedDeletedLiveEvent)
    })
  })
})

describe('DeletedLiveEvent', () => {
  describe('of', () => {
    it('should instantiate', () => {
      const id = LiveEventID.new()
      const title = LiveEventTitle.of('live event title')
      const date = LiveEventDate.of(new Date())
      const startTime = LiveEventStartTime.of('12:30:00')
      const endTime = LiveEventEndTime.of('14:00:00')
      const detail = LiveEventDetail.of('live event detail')
      const venues = [Venue.of('venue name', 'address/url')]
      const artists = [Artist.of('artist name', 'spotify/artist/url')]
      const deletedLiveEvent = DeletedLiveEvent.of(
        id, title, date, startTime, endTime, detail, venues, artists,
      )

      expect(deletedLiveEvent).toBeInstanceOf(DeletedLiveEvent)
      expect(deletedLiveEvent.id).toStrictEqual(id)
      expect(deletedLiveEvent.title).toStrictEqual(title)
      expect(deletedLiveEvent.date).toStrictEqual(date)
      expect(deletedLiveEvent.startTime).toStrictEqual(startTime)
      expect(deletedLiveEvent.endTime).toStrictEqual(endTime)
      expect(deletedLiveEvent.detail).toStrictEqual(detail)
      expect(deletedLiveEvent.venues).toStrictEqual(venues)
      expect(deletedLiveEvent.artists).toStrictEqual(artists)
    })
  })
})

describe('LiveEventTitle', () => {
  it('should instantiate when value is a non-empty string', () => {
    const title = 'live event title'
    const liveEventTitle = LiveEventTitle.of(title)

    expect(liveEventTitle).toBeInstanceOf(LiveEventTitle)
    expect(liveEventTitle.value).toBe(title)
  })
  it('should instantiate when value is an empty string', () => {
    expect(() => 
      LiveEventTitle.of('')
    ).toThrow('Live Event Title should not be an empty string')
  })
})

describe('LiveEventDate', () => {
  it('should instantiate', () => {
    const date = new Date()
    const liveEventDate = LiveEventDate.of(date)

    expect(liveEventDate).toBeInstanceOf(LiveEventDate)
    expect(liveEventDate.value).toBe(date)
  })
})

describe('LiveEventStartTime', () => {
  it('should instantiate', () => {
    const startTime = '14:03:00'
    const liveEventStartTime = LiveEventStartTime.of(startTime)

    expect(liveEventStartTime).toBeInstanceOf(LiveEventStartTime)
    expect(liveEventStartTime.value).toBe(startTime)
  })
})

describe('LiveEventEndTime', () => {
  it('should instantiate', () => {
    const endTime = '14:03:00'
    const liveEventEndTime = LiveEventEndTime.of(endTime)

    expect(liveEventEndTime).toBeInstanceOf(LiveEventEndTime)
    expect(liveEventEndTime.value).toBe(endTime)
  })
})

describe('LiveEventDetail', () => {
  it('should instantiate when value is a non-empty string', () => {
    const detail = 'live event detail'
    const liveEventDetail = LiveEventDetail.of(detail)

    expect(liveEventDetail).toBeInstanceOf(LiveEventDetail)
    expect(liveEventDetail.value).toBe(detail)
  })
  it('should instantiate when value is an empty string', () => {
    expect(() => 
      LiveEventDetail.of('')
    ).toThrow('Live Event Detail should not be an empty string')
  })
})