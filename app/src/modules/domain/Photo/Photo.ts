import { UUIDValueObject } from "../shared/UUIDValueObject";

export class Photo {
  private constructor(
    public readonly id: PhotoId,
    public description: PhotoDescription | null,
  ) {}

  // TODO: 
  static of(
    description: string | null
  ): Photo {
    if (description === null) {
      return new Photo(
        PhotoId.new(),
        null,
      )
    }
    
    return new Photo(
      PhotoId.new(),
      PhotoDescription.of(description),
    )
  }
}

export class PhotoId extends UUIDValueObject {}

export class PhotoDescription {
  private constructor(
    public readonly value: string
  ) {
    // TODO: 文字列の長さの上限
  }

  // TODO: ユーザーから入力された
  static of(value: string): PhotoDescription {
    return new PhotoDescription(value)
  }
}