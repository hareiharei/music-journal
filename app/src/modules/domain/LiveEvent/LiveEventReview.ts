import { UUIDValueObject } from "../shared/UUIDValueObject"
import { LiveEventID } from "./LiveEvent"

export class LiveEventReviewProps {
  protected constructor(
    public readonly id: LiveEventReviewID,
    public readonly liveEventID: LiveEventID,
    public value: string,
  ) {}
}

export class LiveEventReview extends LiveEventReviewProps {
  private constructor(
    public readonly id: LiveEventReviewID,
    public readonly liveEventID: LiveEventID,
    public value: string,
  ) {
    super(id, liveEventID, value)

    if (value  === '') throw new Error('Live Event Review should not be an empty string')

    // TODO: 文字列の長さの上限
  }

  static create(
    liveEventID: LiveEventID,
    value: string
  ): LiveEventReview {
    return new LiveEventReview(
      LiveEventReviewID.new(),
      liveEventID,
      value,
    )
  }

  edit(
    value: string
  ): LiveEventReview {
    return new LiveEventReview(
      this.id,
      this.liveEventID,
      value,
    )
  }

  delete(): DeletedLiveEventReview {
    return DeletedLiveEventReview.of(
      this.id,
      this.liveEventID,
      this.value,
    )
  }
}

export class DeletedLiveEventReview extends LiveEventReviewProps {
  private constructor(
    public readonly id: LiveEventReviewID,
    public readonly liveEventID: LiveEventID,
    public value: string,
  ) {
    super(id, liveEventID, value)
  }

  static of(
    id: LiveEventReviewID,
    liveEventID: LiveEventID,
    value: string
  ): DeletedLiveEventReview {
    return new DeletedLiveEventReview(
      id,
      liveEventID,
      value,
    )
  }
}

export class LiveEventReviewID extends UUIDValueObject {}