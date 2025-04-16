export class Venue {
  constructor(
    public readonly name: VenueName,
    public readonly addressURL: VenueAddressURL | null,
  ) {}
  
  // TODO: ユーザーに入力された

  // TODO: Google Mapから取得された
}

export class VenueName {
  constructor(
    public readonly value: string,
  ) {
    // TODO: 空文字を許容しない

    // TODO: 文字列の長さの上限
  }

  // TODO: ユーザーに入力された

  // TODO: URLのGoogle Mapの情報から取得された
}

export class VenueAddressURL {
  constructor(
    public readonly value: string,
  ) {
    // TODO: 空文字を許容しない
  }

  // TODO: ユーザーに入力された
}