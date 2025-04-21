import { Artist, ArtistName, SpotifyArtistURL } from "@/modules/domain/Artist/Artist"

describe('Artist', () => {
  describe('of', () => {
    it('should instantiate when name is a non-empty string and spotifyArtistURL is a non-empty string', () => {
      const name = 'test_name'
      const url = 'test/url'
      const artist = Artist.of(name, url)

      expect(artist).toBeInstanceOf(Artist)
      expect(artist.name).toStrictEqual(ArtistName.of(name))
      expect(artist.spotifyArtistURL).toStrictEqual(SpotifyArtistURL.of(url))
    })
    it('should instantiate when spotifyArtistURL is null', () => {
      const name = 'test_name'
      const url = null
      const artist = Artist.of(name, url)

      expect(artist).toBeInstanceOf(Artist)
      expect(artist.name).toStrictEqual(ArtistName.of(name))
      expect(artist.spotifyArtistURL).toBe(null)
    })
    it('should instantiate when spotifyArtistURL is an empty string', () => {
      const name = 'test_name'
      const url = ''
      const artist = Artist.of(name, url)

      expect(artist).toBeInstanceOf(Artist)
      expect(artist.name).toStrictEqual(ArtistName.of(name))
      expect(artist.spotifyArtistURL).toBe(null)
    })
    it('should return error when name is an empty string', () => {
      const name = ''
      const url = 'test/url'

      expect(() => 
        Artist.of(name, url)
      ).toThrow('Artist Name should not be an empty string')
    })
  })
})

describe('ArtistName', () => {
  describe('of', () => {
    it('should instantiate when value is a non-empty string', () => {
      const name = 'test'
      const artistName = ArtistName.of(name)

      expect(artistName).toBeInstanceOf(ArtistName)
      expect(artistName.value).toBe(name)
    })
    it('should return error when value is an empty string', () => {
      expect(() =>
        ArtistName.of('')
      ).toThrow('Artist Name should not be an empty string')
    })
  })
})

describe('SpotifyArtistURL', () => {
  describe('of', () => {
    it('should instantiate when value is a non-empty string', () => {
      const url = 'test/url'
      const spotifyArtistURL = SpotifyArtistURL.of(url)

      expect(spotifyArtistURL).toBeInstanceOf(SpotifyArtistURL)
      expect(spotifyArtistURL.value).toBe(url)
    })
    it('should return error when value is an empty string', () => {
      expect(() => 
        SpotifyArtistURL.of('')
      ).toThrow('Spotify Artist URL should not be an empty string')
    })
  })
})