import { Venue } from '@/modules/domain/Venue/Venue'
import { Artist } from '@/modules/domain/Artist/Artist'
import { Photo } from '@/modules/domain/Photo/Photo'
import { UUIDValueObject } from '../shared/UUIDValueObject'

export class LiveEventProps {
  protected constructor(
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
  ) {}
}

export class LiveEvent extends LiveEventProps {
  private constructor(
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
    super(id, title, date, startTime, endTime, detail, review, venues, artists, photos)

    // TODO: startTimeはendTimeより前である
  }
  
  // TODO: 作成された（null&空文字checkをrefactorしたい）
  static create(
    title: string,
    date: Date,
    startTime: string | null,
    endTime: string | null,
    detail: string | null,
    venues: Venue[] | null,
    artists: Artist[] | null,
    photos: Photo[] | null,
  ): LiveEvent {
    return new LiveEvent(
      LiveEventID.new(),
      LiveEventTitle.of(title),
      LiveEventDate.of(date),
      startTime === null || startTime === '' ? null : LiveEventStartTime.of(startTime),
      endTime   === null || endTime   === '' ? null : LiveEventEndTime.of(endTime),
      detail    === null || detail    === '' ? null : LiveEventDetail.of(detail),
      null,
      venues?.length  === 0 ? null : venues,
      artists?.length === 0 ? null : artists,
      photos?.length  === 0 ? null: photos,
    )
  }

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
    if (value  === '') throw new Error('Live Event Detail should not be an empty string')

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


