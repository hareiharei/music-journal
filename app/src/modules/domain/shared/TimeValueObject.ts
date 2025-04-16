const TIME_REGEX = /^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

export class TimeValueObject {
  protected constructor(
    public readonly value: string,
  ) {
    if (!TIME_REGEX.test(value)) {
      throw new Error('Invalid Time Format')
    }
  }

  isBefore(other: TimeValueObject): Boolean {
    return this.value < other.value
  }

  isAfter(other: TimeValueObject): Boolean {
    return this.value > other.value
  }
}