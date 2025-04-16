import { Venue } from '@/modules/domain/Venue/Venue'
import { Artist } from '@/modules/domain/Artist/Artist'
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
  ) {
    super(id, title, date, startTime, endTime, detail, review, venues, artists)

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
    )
  }

  // TODO: 編集された（null&空文字checkをrefactorしたい）
  edit(
    title: string,
    date: Date,
    startTime: string | null,
    endTime: string | null,
    detail: string | null,
    review: string | null,
    venues: Venue[] | null,
    artists: Artist[] | null,
  ): LiveEvent {
    return new LiveEvent(
      this.id,
      LiveEventTitle.of(title),
      LiveEventDate.of(date),
      startTime === null || startTime === '' ? null : LiveEventStartTime.of(startTime),
      endTime   === null || endTime   === '' ? null : LiveEventEndTime.of(endTime),
      detail    === null || detail    === '' ? null : LiveEventDetail.of(detail),
      review    === null || review    === '' ? null : LiveEventReview.of(review),
      venues?.length  === 0 ? null : venues,
      artists?.length === 0 ? null : artists,
    )
  }

  delete(): DeletedLiveEvent {
    return DeletedLiveEvent.of(
      this.id,
      this.title,
      this.date,
      this.startTime,
      this.endTime,
      this.detail,
      this.review,
      this.venues,
      this.artists,
    )
  }
}

export class DeletedLiveEvent extends LiveEventProps {
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
  ) {
    super(id, title, date, startTime, endTime, detail, review, venues, artists)
  }

  static of(
    id: LiveEventID,
    title: LiveEventTitle,
    date: LiveEventDate,
    startTime: LiveEventStartTime | null,
    endTime: LiveEventEndTime | null,
    detail: LiveEventDetail | null,
    review: LiveEventReview | null,
    venues: Venue[] | null,
    artists: Artist[] | null,
  ): DeletedLiveEvent {
    return new DeletedLiveEvent(
      id,
      title,
      date,
      startTime,
      endTime,
      detail,
      review,
      venues,
      artists,
    )
  }
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
    if (value  === '') throw new Error('Live Event Review should not be an empty string')

    // TODO: 文字列の長さの上限
  }

  static of(value: string): LiveEventReview {
    return new LiveEventReview(value)
  }
}


