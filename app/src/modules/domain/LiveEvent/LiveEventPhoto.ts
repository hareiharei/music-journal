import { UUIDValueObject } from "../shared/UUIDValueObject";
import { Photo } from "../Photo/Photo";
import { LiveEventID } from "./LiveEvent";

export class LiveEventPhotoProps {
  protected constructor(
    public readonly id: LiveEventPhotoID,
    public readonly liveEventID: LiveEventID,
    public description: PhotoDescription | null,
    public photo: Photo,
  ) {}
}

export class LiveEventPhoto extends LiveEventPhotoProps {
  private constructor(
    public readonly id: LiveEventPhotoID,
    public readonly liveEventID: LiveEventID,
    public description: PhotoDescription | null,
    public photo: Photo,
  ) {
    super(id, liveEventID, description, photo)
  }
  static of(
    liveEventID: LiveEventID,
    description: string | null,
    photo: Photo
  ): LiveEventPhoto {
    return new LiveEventPhoto(
      LiveEventPhotoID.new(),
      liveEventID,
      description === null || description === '' ? null : PhotoDescription.of(description),
      photo,
    )
  }

  // TODO: refactor null & empty string check
  updateDescription(
    description: string | null
  ): LiveEventPhoto {
    return new LiveEventPhoto(
      this.id,
      this.liveEventID,
      description === '' || description === null ? null : PhotoDescription.of(description),
      this.photo,
    )
  }

  delete(): DeletedLiveEventPhoto {
    return DeletedLiveEventPhoto.of(
      this.id,
      this.liveEventID,
      this.description,
      this.photo,
    )
  }
}

export class DeletedLiveEventPhoto extends LiveEventPhotoProps {
  private constructor(
    public readonly id: LiveEventPhotoID,
    public readonly liveEventID: LiveEventID,
    public description: PhotoDescription | null,
    public photo: Photo,
  ) {
    super(id, liveEventID, description, photo)
  }
  static of(
    id: LiveEventPhotoID,
    liveEventID: LiveEventID,
    description: PhotoDescription | null,
    photo: Photo,
  ): DeletedLiveEventPhoto {
    return new DeletedLiveEventPhoto(
      id,
      liveEventID,
      description,
      photo,
    )
  }
}

export class LiveEventPhotoID extends UUIDValueObject {}

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