export class Photo {
  constructor(
    public readonly id: PhotoId,
    public descrition: PhotoDescription | null,
  ) {}
}

export class PhotoId {
  constructor(
    public readonly value: string,
  ) {}
}

export class PhotoDescription {
  constructor(
    public readonly value: string
  ) {}
}