import { TimeValueObject } from "@/shared/domain/TimeValueObject"

class Time extends TimeValueObject {
  private constructor(
    public readonly value: string,
  ) {
    super(value)
  }

  static of(value: string): Time {
    return new Time(value)
  }
}

describe('TimeValueObject', () => {
  describe('of', () => {
    it('should instantiate when value is in a valid time format', () => {
      const value = '23:58:00'
      const time = Time.of(value)

      expect(time).toBeInstanceOf(Time)
      expect(time.value).toBe(value)
    })
    it('should return error when value is an empty string', () => {
      expect(() => 
        Time.of('')
      ).toThrow('Invalid Time Format')
    })
    it('should return error when value is in an invalid time format', () => {
      expect(() => 
        Time.of('5:23:00')
      ).toThrow('Invalid Time Format')
    })
  })
  describe('isBefore', () => {
    it('should return true when this value is before the other value', () => {
      const thisValue = Time.of('03:34:00')
      const otherValue = Time.of('16:34:00')
      const result = thisValue.isBefore(otherValue)

      expect(result).toBe(true)
    })
    it('should return false when this value is same as the other value', () => {
      const thisValue = Time.of('03:34:00')
      const otherValue = Time.of('03:34:00')
      const result = thisValue.isBefore(otherValue)

      expect(result).toBe(false)
    })
    it('should return false when this value is after the other value', () => {
      const thisValue = Time.of('16:34:00')
      const otherValue = Time.of('03:34:00')
      const result = thisValue.isBefore(otherValue)

      expect(result).toBe(false)
    })
  })
  describe('isAfter', () => {
    it('should return true when this value is after the other value', () => {
      const thisValue = Time.of('16:34:00')
      const otherValue = Time.of('03:34:00')
      const result = thisValue.isAfter(otherValue)

      expect(result).toBe(true)
    })
    it('should return false when this value is same as the other value', () => {
      const thisValue = Time.of('16:34:00')
      const otherValue = Time.of('16:34:00')
      const result = thisValue.isAfter(otherValue)

      expect(result).toBe(false)
    })
    it('should return false when this value is before the other value', () => {
      const thisValue = Time.of('03:34:00')
      const otherValue = Time.of('16:34:00')
      const result = thisValue.isAfter(otherValue)

      expect(result).toBe(false)
    })
  })
})