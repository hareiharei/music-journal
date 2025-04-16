import { UUIDValueObject } from "../shared/UUIDValueObject";

export class Photo {
  constructor(
    public readonly id: PhotoId,
    public description: PhotoDescription | null,
  ) {}

  // TODO: 
}

export class PhotoId extends UUIDValueObject {}

export class PhotoDescription {
  constructor(
    public readonly value: string
  ) {
    // TODO: 文字列の長さの上限
  }

  // TODO: ユーザーから入力された
}