import { isEmptyString } from "@/shared/util/check"
import { UUIDValueObject } from "../../../shared/domain/UUIDValueObject"
import { LiveEventID } from "./LiveEvent"

export class LiveEventReviewProps {
  protected constructor(
    public readonly id: LiveEventReviewID,
    public readonly liveEventID: LiveEventID,
    public review: string,
  ) {}
}

export class LiveEventReview extends LiveEventReviewProps {
  private constructor(
    public readonly id: LiveEventReviewID,
    public readonly liveEventID: LiveEventID,
    public review: string,
  ) {
    super(id, liveEventID, review)

    if (isEmptyString(review)) throw new Error('Live Event Review should not be an empty string')

    // TODO: 文字列の長さの上限
  }

  static create(
    liveEventID: LiveEventID,
    review: string
  ): LiveEventReview {
    return new LiveEventReview(
      LiveEventReviewID.new(),
      liveEventID,
      review,
    )
  }

  static fromStore(
    id: string,
    liveEventID: string,
    review: string
  ): LiveEventReview {
    return new LiveEventReview(
      LiveEventReviewID.of(id),
      LiveEventID.of(liveEventID),
      review,
    )
  }

  edit(
    review: string
  ): LiveEventReview {
    return new LiveEventReview(
      this.id,
      this.liveEventID,
      review,
    )
  }

  delete(): DeletedLiveEventReview {
    return DeletedLiveEventReview.of(
      this.id,
      this.liveEventID,
      this.review,
    )
  }
}

export class DeletedLiveEventReview extends LiveEventReviewProps {
  private constructor(
    public readonly id: LiveEventReviewID,
    public readonly liveEventID: LiveEventID,
    public review: string,
  ) {
    super(id, liveEventID, review)
  }

  static of(
    id: LiveEventReviewID,
    liveEventID: LiveEventID,
    review: string
  ): DeletedLiveEventReview {
    return new DeletedLiveEventReview(
      id,
      liveEventID,
      review,
    )
  }
}

export class LiveEventReviewID extends UUIDValueObject {}