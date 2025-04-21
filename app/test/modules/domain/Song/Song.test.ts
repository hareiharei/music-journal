import { Artist } from "@/modules/domain/Artist/Artist"
import { Song, SongTitle, SpotifySongURL } from "@/modules/domain/Song/Song"

const artists = [
  Artist.of('artist1', 'artist1/url'),
  Artist.of('artist2', null)
]

describe('Song', () => {
  describe('of', () => {
    it('should instantiate when title is a non-empty string and spotifySongURL is a non-empty string', () => {
      const title = 'test'
      const url = 'test/url'
      const song = Song.of(title, artists, url)

      expect(song).toBeInstanceOf(Song)
      expect(song.title).toStrictEqual(SongTitle.of(title))
      expect(song.artists).toBe(artists)
      expect(song.spotifySongURL).toStrictEqual(SpotifySongURL.of(url))
    })
    it('should instantiate when spotifySongURL is null', () => {
      const title = 'test'
      const url = null
      const song = Song.of(title, artists, url)

      expect(song).toBeInstanceOf(Song)
      expect(song.title).toStrictEqual(SongTitle.of(title))
      expect(song.artists).toBe(artists)
      expect(song.spotifySongURL).toBe(null)
    })
    it('should instantiate when spotifySongURL is an empty string', () => {
      const title = 'test'
      const url = ''
      const song = Song.of(title, artists, url)

      expect(song).toBeInstanceOf(Song)
      expect(song.title).toStrictEqual(SongTitle.of(title))
      expect(song.artists).toBe(artists)
      expect(song.spotifySongURL).toBe(null)
    })
    it('should return error when title is an empty string', () => {
      const title = ''
      const url = 'test/url'

      expect(() =>
        Song.of(title, artists, url)
      ).toThrow('Song Title should not be an empty string')
    })
  })
})

describe('SongTitle', () => {
  describe('of', () => {
    it('should instantiate when value is a non-empty string', () => {
      const title = 'test'
      const songTitle = SongTitle.of(title)

      expect(songTitle).toBeInstanceOf(SongTitle)
      expect(songTitle.value).toBe(title)
    })
    it('should return error when value is an empty string', () => {
      expect(() =>
        SongTitle.of('')
      ).toThrow('Song Title should not be an empty string')
    })
  })
})

describe('SpotifySongURL', () => {
  describe('of', () => {
    it('should instantiate when value is a non-empty string', () => {
      const url = 'test/url'
      const spotifySongURL = SpotifySongURL.of(url)

      expect(spotifySongURL).toBeInstanceOf(SpotifySongURL)
      expect(spotifySongURL.value).toBe(url)
    })
    it('should return error when value is an empty string', () => {
      expect(() =>
        SpotifySongURL.of('')
      ).toThrow('Spotify Song URL should not be an empty string')
    })
  })
})