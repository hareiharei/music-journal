import { Venue } from '@/modules/domain/Venue/Venue'
import { Artist } from '@/modules/domain/Artist/Artist'
import { Photo } from '@/modules/domain/Photo/Photo'
import { UUIDValueObject } from '../shared/UUIDValueObject'

export class LiveEvent {
  constructor(
    public readonly id: LiveEventID,
    public title: LiveEventTitle,
    public date: LiveEventDate,
    public startTime: LiveEventStartTime | null,
    public endTime: LiveEventEndTime | null,
    public detail: LiveEventDetail | null,
    public review: LiveEventReview | null,
    public venues: Venue[] | null,
    public artists: Artist[] | null,
    public photos: Photo[] | null,
  ) {
    // TODO: startTimeはendTimeより前である
  }
  
  // TODO: 作成された

  // TODO: 編集された

  // TODO: 削除された
}

export class LiveEventID extends UUIDValueObject {}

export class LiveEventTitle {
  private constructor(
    public readonly value: string,
  ) {
    if (value === '') throw new Error('Live Event Title should not be an empty string')

    // TODO: 文字列の長さの制限
  }

  static of(value: string): LiveEventTitle {
    return new LiveEventTitle(value)
  }
}

export class LiveEventDate {
  private constructor(
    public readonly value: Date,
  ) {}

  static of(value: Date) {
    return new LiveEventDate(value)
  }
}

export class LiveEventStartTime {
  private constructor(
    public readonly value: string,
  ) {
    // TODO: Time型のような値として扱える
  }

  static of(value: string): LiveEventStartTime {
    return new LiveEventStartTime(value)
  }
}

export class LiveEventEndTime {
  private constructor(
    public readonly value: string,
  ) {
    // TODO: TIme型のような値として扱える
  }

  static of(value: string): LiveEventEndTime {
    return new LiveEventEndTime(value)
  }
}

export class LiveEventDetail {
  private constructor(
    public readonly value: string,
  ) {
    // TODO: 文字列の長さの上限
  }

  static of(value: string): LiveEventDetail {
    return new LiveEventDetail(value)
  }
}

export class LiveEventReview {
  private constructor(
    public readonly value: string,
  ) {
    // TODO: 文字列の長さの上限
  }

  static of(value: string): LiveEventReview {
    return new LiveEventReview(value)
  }
}


