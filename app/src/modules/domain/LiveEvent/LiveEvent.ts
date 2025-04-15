import { Venue } from '@/modules/domain/Venue/Venue'
import { Artist } from '@/modules/domain/Artist/Artist'
import { SetList } from '@/modules/domain/LiveEvent/SetList'
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
    public setList: SetList | null,
    public photos: Photo[] | null,
  ) {}
}

export class LiveEventID extends UUIDValueObject {}

export class LiveEventTitle {
  constructor(
    public readonly value: string,
  ) {}
}

export class LiveEventDate {
  constructor(
    public readonly value: Date,
  ) {}
}

export class LiveEventStartTime {
  constructor(
    public readonly value: string,
  ) {}
}

export class LiveEventEndTime {
  constructor(
    public readonly value: string,
  ) {}
}

export class LiveEventDetail {
  constructor(
    public readonly value: string,
  ) {}
}

export class LiveEventReview {
  constructor(
    public readonly value: string,
  ) {}
}


