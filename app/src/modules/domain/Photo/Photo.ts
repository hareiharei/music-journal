import { UUIDValueObject } from "../../../shared/domain/UUIDValueObject";

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

  static fromStore(
    id: string
  ): Photo {
    return new Photo(
      PhotoID.of(id)
    )
  }
}

export class PhotoID extends UUIDValueObject {}