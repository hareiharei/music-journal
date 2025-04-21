import { Venue, VenueAddressURL, VenueName } from "@/modules/domain/Venue/Venue"

describe('Venue', () => {
  describe('of', () => {
    it('should instantiate when name is a non-empty string and addressURL is a non-empty string', () => {
      const name = 'test'
      const url = 'test/url'
      const venue = Venue.of(name, url)

      expect(venue).toBeInstanceOf(Venue)
      expect(venue.name).toStrictEqual(VenueName.of(name))
      expect(venue.addressURL).toStrictEqual(VenueAddressURL.of(url))
    })
    it('should instantiate when addressURL is an empty string', () => {
      const name = 'test'
      const url = ''
      const venue = Venue.of(name, url)

      expect(venue).toBeInstanceOf(Venue)
      expect(venue.name).toStrictEqual(VenueName.of(name))
      expect(venue.addressURL).toBe(null)
    })
    it('should instantiate when addressURL is null', () => {
      const name = 'test'
      const url = null
      const venue = Venue.of(name, url)

      expect(venue).toBeInstanceOf(Venue)
      expect(venue.name).toStrictEqual(VenueName.of(name))
      expect(venue.addressURL).toBe(null)
    })
    it('should return error when name is an empty string', () => {
      const name = ''
      const url = 'test/url'

      expect(() =>
        Venue.of(name, url)
      ).toThrow('Venue Name should not be an empty string')
    })
  })
})

describe('VenueName', () => {
  describe('of', () => {
    it('should instantiate when value is a non-empty string', () => {
      const name = 'test'
      const venueName = VenueName.of(name)

      expect(venueName).toBeInstanceOf(VenueName)
      expect(venueName.value).toBe(name)
    })
    it('should return error when value is an empty string', () => {
      expect(() =>
        VenueName.of('')
      ).toThrow('Venue Name should not be an empty string')
    })
  })
})

describe('VenueAddressURL', () => {
  describe('of', () => {
    it('should instantiate when value is a non-empty string', () => {
      const url = 'test/url'
      const venueAddressURL = VenueAddressURL.of(url)

      expect(venueAddressURL).toBeInstanceOf(VenueAddressURL)
      expect(venueAddressURL.value).toBe(url)
    })
    it('should return error when value is an empty string', () => {
      expect(() =>
        VenueAddressURL.of('')
      ).toThrow('Venue Address URL should not be an empty string')
    })
  })
})