import { UUIDValueObject } from "../shared/UUIDValueObject";

export class Photo {
  constructor(
    public readonly id: PhotoId,
    public descrition: PhotoDescription | null,
  ) {}
}

export class PhotoId extends UUIDValueObject {}

export class PhotoDescription {
  constructor(
    public readonly value: string
  ) {}
}