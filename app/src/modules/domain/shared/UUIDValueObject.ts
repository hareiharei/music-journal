import { version as uuidVersion } from 'uuid'
import { validate as uuidValidate } from 'uuid'

export class UUIDValueObject {
  constructor(
    public readonly value: string
  ) {
    if (!uuidValidate(value)) {
      throw new Error(`Invalid UUID`)
    }
    if (uuidVersion(value) !== 4) {
      throw new Error(`Invalid UUID Version`)
    }
  }
}