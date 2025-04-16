import { UUIDValueObject } from "../shared/UUIDValueObject";

export class Photo {
  private constructor(
    public readonly id: PhotoID,
    // TODO: photoへのpath
  ) {}

  // TODO: 
  static of(
    description: string | null
  ): Photo {
    return new Photo(
      PhotoID.new(),
    )
  }
}

export class PhotoID extends UUIDValueObject {}