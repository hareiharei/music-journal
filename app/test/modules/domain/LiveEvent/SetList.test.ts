import { Artist } from "@/modules/domain/Artist/Artist"
import { LiveEventID } from "@/modules/domain/LiveEvent/LiveEvent"
import { DeletedSetList, SetList, SetListID, SetListSong, SetListSongID, SetListSongOrder } from "@/modules/domain/LiveEvent/SetList"
import { Song } from "@/modules/domain/Song/Song"
import { v4 as uuidv4 } from 'uuid'

describe('SetList', () => {
  describe('create', () => {
    it('should instantiate', () => {
      const liveEventID = LiveEventID.new()
      const songs = [
        SetListSong.of(
          0,
          Song.of(
            'song title 0',
            [Artist.of('artist name', 'spotify/artist/url/0')],
            'spotify/song/url/0',
          ),
        ),
        SetListSong.of(
          1,
          Song.of(
            'song title 1',
            [Artist.of('artist name', 'spotify/artist/url/1')],
            'spotify/song/url/1',
          ),
        ),
        SetListSong.of(
          2,
          Song.of(
            'song title 2',
            [Artist.of('artist name', 'spotify/artist/url/2')],
            'spotify/song/url/2',
          ),
        ),
      ]

      const setList = SetList.create(liveEventID, songs)

      expect(setList).toBeInstanceOf(SetList)
      expect(setList.id).toStrictEqual(SetListID.of(setList.id.value))
      expect(setList.liveEventID).toStrictEqual(liveEventID)
      expect(setList.songs).toStrictEqual(songs)
    })
    it('should return error when songs are an empty list', () => {
      const liveEventID = LiveEventID.new()
      const songs: SetListSong[] = []

      expect(() =>
        SetList.create(liveEventID, songs)
      ).toThrow('Songs should not be an empty list')
    })
    it('should return error when songs are not in sequential order', () => {
      const liveEventID = LiveEventID.new()
      const songs: SetListSong[] = [
        SetListSong.of(
          0,
          Song.of(
            'song title 0',
            [Artist.of('artist name', 'spotify/artist/url/0')],
            'spotify/song/url/0',
          ),
        ),
        SetListSong.of(
          2,
          Song.of(
            'song title 1',
            [Artist.of('artist name', 'spotify/artist/url/1')],
            'spotify/song/url/1',
          ),
        ),
        SetListSong.of(
          1,
          Song.of(
            'song title 2',
            [Artist.of('artist name', 'spotify/artist/url/2')],
            'spotify/song/url/2',
          ),
        ),
      ]

      expect(() =>
        SetList.create(liveEventID, songs)
      ).toThrow('Songs should be in sequential order')
    })
    it('should return error when songs do not start from order number 0', () => {
      const liveEventID = LiveEventID.new()
      const songs: SetListSong[] = [
        SetListSong.of(
          1,
          Song.of(
            'song title 0',
            [Artist.of('artist name', 'spotify/artist/url/0')],
            'spotify/song/url/0',
          ),
        ),
        SetListSong.of(
          2,
          Song.of(
            'song title 1',
            [Artist.of('artist name', 'spotify/artist/url/1')],
            'spotify/song/url/1',
          ),
        ),
        SetListSong.of(
          3,
          Song.of(
            'song title 2',
            [Artist.of('artist name', 'spotify/artist/url/2')],
            'spotify/song/url/2',
          ),
        ),
      ]

      expect(() =>
        SetList.create(liveEventID, songs)
      ).toThrow('Songs should be in sequential order starting from 0')
    })
  })
  describe('fromStore', () => {
    it('should instantiate', () => {
      const id = uuidv4()
      const liveEventID = uuidv4()
      const songs = [
        SetListSong.fromStore(
          uuidv4(),
          0,
          Song.of(
            'song title 0',
            [Artist.of('artist name', 'spotify/artist/url/0')],
            'spotify/song/url/0',
          ),
        ),
        SetListSong.fromStore(
          uuidv4(),
          1,
          Song.of(
            'song title 1',
            [Artist.of('artist name', 'spotify/artist/url/1')],
            'spotify/song/url/1',
          ),
        ),
        SetListSong.fromStore(
          uuidv4(),
          2,
          Song.of(
            'song title 2',
            [Artist.of('artist name', 'spotify/artist/url/2')],
            'spotify/song/url/2',
          ),
        ),
      ]

      const setList = SetList.fromStore(id, liveEventID, songs)

      expect(setList).toBeInstanceOf(SetList)
      expect(setList.id).toStrictEqual(SetListID.of(id))
      expect(setList.liveEventID).toStrictEqual(LiveEventID.of(liveEventID))
      expect(setList.songs).toStrictEqual(songs)
    })
    it('should return error when songs are an empty list', () => {
      const id = uuidv4()
      const liveEventID = uuidv4()
      const songs: SetListSong[] = []

      expect(() => 
        SetList.fromStore(id, liveEventID, songs)
      ).toThrow('Songs should not be an empty list')
    })
    it('should return error when songs are in not sequential order', () => {
      const id = uuidv4()
      const liveEventID = uuidv4()
      const songs = [
        SetListSong.fromStore(
          uuidv4(),
          0,
          Song.of(
            'song title 0',
            [Artist.of('artist name', 'spotify/artist/url/0')],
            'spotify/song/url/0',
          ),
        ),
        SetListSong.fromStore(
          uuidv4(),
          2,
          Song.of(
            'song title 1',
            [Artist.of('artist name', 'spotify/artist/url/1')],
            'spotify/song/url/1',
          ),
        ),
        SetListSong.fromStore(
          uuidv4(),
          1,
          Song.of(
            'song title 2',
            [Artist.of('artist name', 'spotify/artist/url/2')],
            'spotify/song/url/2',
          ),
        ),
      ]

      expect(() => 
        SetList.fromStore(id, liveEventID, songs)
      ).toThrow('Songs should be in sequential order starting from 0')
    })
    it('should return error when songs do not start from order number 0', () => {
      const id = uuidv4()
      const liveEventID = uuidv4()
      const songs = [
        SetListSong.fromStore(
          uuidv4(),
          1,
          Song.of(
            'song title 0',
            [Artist.of('artist name', 'spotify/artist/url/0')],
            'spotify/song/url/0',
          ),
        ),
        SetListSong.fromStore(
          uuidv4(),
          2,
          Song.of(
            'song title 1',
            [Artist.of('artist name', 'spotify/artist/url/1')],
            'spotify/song/url/1',
          ),
        ),
        SetListSong.fromStore(
          uuidv4(),
          3,
          Song.of(
            'song title 2',
            [Artist.of('artist name', 'spotify/artist/url/2')],
            'spotify/song/url/2',
          ),
        ),
      ]

      expect(() => 
        SetList.fromStore(id, liveEventID, songs)
      ).toThrow('Songs should be in sequential order starting from 0')
    })
  })
  describe('edit', () => {
    it('should update set list', () => {
      const liveEventID = LiveEventID.new()
      const songs = [
        SetListSong.of(
          0,
          Song.of(
            'song title',
            [Artist.of('artist name', 'spotify/artist/url')],
            'spotify/song/url',
          ),
        ),
      ]
      const setList = SetList.create(liveEventID, songs)

      const newSongs = [
        SetListSong.of(
          0,
          Song.of(
            'song title 0',
            [Artist.of('artist name', 'spotify/artist/url/0')],
            'spotify/song/url/0',
          ),
        ),
        SetListSong.of(
          1,
          Song.of(
            'song title 1',
            [Artist.of('artist name', 'spotify/artist/url/1')],
            'spotify/song/url/1',
          ),
        ),
        SetListSong.of(
          2,
          Song.of(
            'song title 2',
            [Artist.of('artist name', 'spotify/artist/url/2')],
            'spotify/song/url/2',
          ),
        ),
      ]

      const newSetList = setList.edit(newSongs)

      const expectedSetList = SetList.fromStore(
        setList.id.value,
        setList.liveEventID.value,
        newSongs,
      )

      expect(newSetList).toStrictEqual(expectedSetList)
    })
    it('should return error when songs are an empty list', () => {
      const liveEventID = LiveEventID.new()
      const songs = [
        SetListSong.of(
          0,
          Song.of(
            'song title',
            [Artist.of('artist name', 'spotify/artist/url')],
            'spotify/song/url',
          ),
        ),
      ]
      const setList = SetList.create(liveEventID, songs)

      const newSongs: SetListSong[] = []

      expect(() =>
        setList.edit(newSongs)
      ).toThrow('Songs should not be an empty list')
    })
    it('should return error when songs are not in sequential order', () => {
      const liveEventID = LiveEventID.new()
      const songs = [
        SetListSong.of(
          0,
          Song.of(
            'song title',
            [Artist.of('artist name', 'spotify/artist/url')],
            'spotify/song/url',
          ),
        ),
      ]
      const setList = SetList.create(liveEventID, songs)

      const newSongs = [
        SetListSong.of(
          0,
          Song.of(
            'song title 0',
            [Artist.of('artist name', 'spotify/artist/url/0')],
            'spotify/song/url/0',
          ),
        ),
        SetListSong.of(
          2,
          Song.of(
            'song title 1',
            [Artist.of('artist name', 'spotify/artist/url/1')],
            'spotify/song/url/1',
          ),
        ),
        SetListSong.of(
          1,
          Song.of(
            'song title 2',
            [Artist.of('artist name', 'spotify/artist/url/2')],
            'spotify/song/url/2',
          ),
        ),
      ]

      expect(() =>
        setList.edit(newSongs)
      ).toThrow('Songs should be in sequential order starting from 0')
    })
    it('should return error when songs do not start from order number 0', () => {
      const liveEventID = LiveEventID.new()
      const songs = [
        SetListSong.of(
          0,
          Song.of(
            'song title',
            [Artist.of('artist name', 'spotify/artist/url')],
            'spotify/song/url',
          ),
        ),
      ]
      const setList = SetList.create(liveEventID, songs)

      const newSongs = [
        SetListSong.of(
          1,
          Song.of(
            'song title 0',
            [Artist.of('artist name', 'spotify/artist/url/0')],
            'spotify/song/url/0',
          ),
        ),
        SetListSong.of(
          2,
          Song.of(
            'song title 1',
            [Artist.of('artist name', 'spotify/artist/url/1')],
            'spotify/song/url/1',
          ),
        ),
        SetListSong.of(
          3,
          Song.of(
            'song title 2',
            [Artist.of('artist name', 'spotify/artist/url/2')],
            'spotify/song/url/2',
          ),
        ),
      ]

      expect(() =>
        setList.edit(newSongs)
      ).toThrow('Songs should be in sequential order starting from 0')
    })
  })
  describe('delete', () => {
    it('should return DeletedSetList', () => {
      const liveEventID = LiveEventID.new()
      const songs = [
        SetListSong.of(
          0,
          Song.of(
            'song title',
            [Artist.of('artist name', 'spotify/artist/url')],
            'spotify/song/url',
          ),
        ),
      ]
      const setList = SetList.create(liveEventID, songs)

      const deletedSetList = setList.delete()

      const expectedDeletedSetList = DeletedSetList.of(
        setList.id,
        setList.liveEventID,
        songs,
      )

      expect(deletedSetList).toStrictEqual(expectedDeletedSetList)
    })
  })
})

describe('DeletedSetList', () => {
  describe('of', () => {
    it('should instantiate', () => {
      const id = SetListID.new()
      const liveEventID = LiveEventID.new()
      const songs = [
        SetListSong.of(
          0,
          Song.of(
            'song title',
            [Artist.of('artist name', 'spotify/artist/url')],
            'spotify/song/url',
          ),
        ),
      ]

      const deletedSetList = DeletedSetList.of(id, liveEventID, songs)

      expect(deletedSetList).toBeInstanceOf(DeletedSetList)
      expect(deletedSetList.id).toBe(id)
      expect(deletedSetList.liveEventID).toBe(liveEventID)
      expect(deletedSetList.songs).toBe(songs)
    })
  })
})

describe('SetListSong', () => {
  describe('of', () => {
    it('should instantiate', () => {
      const order = 0
      const song = Song.of(
        'song title',
        [Artist.of('artist name', 'spotify/artist/url')],
        'spotify/song/url',
      )

      const setListSong = SetListSong.of(order, song)

      expect(setListSong).toBeInstanceOf(SetListSong)
      expect(setListSong.id).toStrictEqual(SetListSongID.of(setListSong.id.value))
      expect(setListSong.order).toStrictEqual(SetListSongOrder.of(order))
      expect(setListSong.song).toBe(song)
    })
  })
  describe('fromStore', () => {
    it('should instantiate', () => {
      const id = uuidv4()
      const order = 0
      const song = Song.of(
        'song title',
        [Artist.of('artist name', 'spotify/artist/url')],
        'spotify/song/url',
      )

      const setListSong = SetListSong.fromStore(id, order, song)

      expect(setListSong).toBeInstanceOf(SetListSong)
      expect(setListSong.id).toStrictEqual(SetListSongID.of(id))
      expect(setListSong.order).toStrictEqual(SetListSongOrder.of(order))
      expect(setListSong.song).toBe(song)
    })
  })
})

describe('SetListSongOrder', () => {
  describe('of', () => {
    it('should instantiate when value is an integer greater than 0', () => {
      const setListSongOrder = SetListSongOrder.of(1)
      
      expect(setListSongOrder).toBeInstanceOf(SetListSongOrder)
      expect(setListSongOrder.value).toBe(1)
    })
    it('should instantiate error when value is 0', () => {
      const setListSongOrder = SetListSongOrder.of(0)
      
      expect(setListSongOrder).toBeInstanceOf(SetListSongOrder)
      expect(setListSongOrder.value).toBe(0)
    })
    it('should return error when value is an integer less than 0', () => {
      expect(() =>
        SetListSongOrder.of(-1)
      ).toThrow('Set List Song Order should be greater than or equal to 0')
    })
    it('should return error when value is not an integer', () => {
      expect(() =>
        SetListSongOrder.of(0.1)
      ).toThrow('Set List Song Order should be an integer')
    })
  })
})