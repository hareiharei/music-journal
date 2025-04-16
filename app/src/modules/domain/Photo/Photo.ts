import { UUIDValueObject } from "../shared/UUIDValueObject";

export class Photo {
  private constructor(
    public readonly id: PhotoID,
    // TODO: photoへのpath
  ) {}

  // TODO: 
  static of(): Photo {
    return new Photo(
      PhotoID.new(),
    )
  }
}

export class PhotoID extends UUIDValueObject {}