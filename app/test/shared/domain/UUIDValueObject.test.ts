import { UUIDValueObject } from "@/shared/domain/UUIDValueObject"
import { version as uuidVersion, validate as uuidValidate, v4 as uuidv4, v5 as uuidv5 } from 'uuid'

describe('UUIDValueObject', () => {
  describe('new', () => {
    it('should return UUIDValueObject with random v4 UUID', () => {
      const uuid = UUIDValueObject.new()

      expect(uuid).toBeInstanceOf(UUIDValueObject)
      expect(uuidValidate(uuid.value)).toBe(true)
      expect(uuidVersion(uuid.value)).toBe(4)
    })
  })
  describe('of', () => {
    it('should instantiate with v4 UUID', () => {
      const value = uuidv4()
      const uuid = UUIDValueObject.of(value)

      expect(uuid).toBeInstanceOf(UUIDValueObject)
      expect(uuid.value).toBe(value)
    })
    it('should return error when value is a UUID of a version other than v4', () => {
      const value = uuidv5('t', uuidv5.DNS)

      expect(() => 
        UUIDValueObject.of(value)
      ).toThrow('Invalid UUID Version')
    })
    it('should return error when value is not a UUID', () => {
      const value = 'ttttttt'

      expect(() => 
        UUIDValueObject.of(value)
      ).toThrow('Invalid UUID')
    })
  })
})