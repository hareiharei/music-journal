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
  ) {
    // TODO: startTimeはendTimeより前である
  }
  
  // TODO: 作成された

  // TODO: 編集された

  // TODO: 削除された
}

export class LiveEventID extends UUIDValueObject {}

export class LiveEventTitle {
  constructor(
    public readonly value: string,
  ) {
    // TODO: 空文字を許容しない

    // TODO: 文字列の長さの制限
  }

  // TODO: ユーザーに入力された
}

export class LiveEventDate {
  constructor(
    public readonly value: Date,
  ) {}

  // TODO: ユーザーに入力された
}

export class LiveEventStartTime {
  constructor(
    public readonly value: string,
  ) {
    // TODO: Time型のような値として扱える
  }

  // TODO: ユーザーに入力された
}

export class LiveEventEndTime {
  constructor(
    public readonly value: string,
  ) {
    // TODO: TIme型のような値として扱える
  }

  // TODO: ユーザーに入力された
}

export class LiveEventDetail {
  constructor(
    public readonly value: string,
  ) {
    // TODO: 文字列の長さの上限
  }

  // TODO: ユーザーに入力された
}

export class LiveEventReview {
  constructor(
    public readonly value: string,
  ) {
    // TODO: 文字列の長さの上限
  }

  // TODO: ユーザーに入力された
}


