import { version as uuidVersion, validate as uuidValidate, v4 as uuidv4 } from 'uuid'

export class UUIDValueObject {
  protected constructor(
    public readonly value: string
  ) {
    if (!uuidValidate(value)) {
      throw new Error(`Invalid UUID`)
    }
    if (uuidVersion(value) !== 4) {
      throw new Error(`Invalid UUID Version`)
    }
  }

  static new(): UUIDValueObject {
    return new UUIDValueObject(uuidv4())
  }

  static of(value: string) {
    return new UUIDValueObject(value)
  }
}