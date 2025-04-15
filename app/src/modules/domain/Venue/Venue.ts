export class Venue {
  constructor(
    public readonly name: VenueName,
    public readonly addressURL: VenueAddressURL | null,
  ) {}
}

export class VenueName {
  constructor(
    public readonly value: string,
  ) {}
}

export class VenueAddressURL {
  constructor(
    public readonly value: string,
  ) {}
}