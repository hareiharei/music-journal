import { isEmptyString, isNullOrEmptyString } from "@/shared/util/check"

export class Venue {
  private constructor(
    public readonly name: VenueName,
    public readonly addressURL: VenueAddressURL | null,
  ) {}

  static of(
    name: string,
    addressURL: string | null,
  ): Venue {
    return new Venue(
      VenueName.of(name),
      isNullOrEmptyString(addressURL) ? null : VenueAddressURL.of(addressURL),
    )
  }

  // TODO: Google Mapから取得された
}

export class VenueName {
  private constructor(
    public readonly value: string,
  ) {
    if (isEmptyString(value)) throw new Error('Venue Name should not be an empty string')

    // TODO: 文字列の長さの上限
  }

  static of(value: string): VenueName {
    return new VenueName(value)
  }

  // TODO: URLのGoogle Mapの情報から取得された
}

export class VenueAddressURL {
  private constructor(
    public readonly value: string,
  ) {
    if (isEmptyString(value)) throw new Error('Venue Address URL should not be an empty string')
  }

  static of(value: string): VenueAddressURL {
    return new VenueAddressURL(value)
  }
}