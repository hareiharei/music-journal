import { Song } from '@/modules/domain/Song/Song'
import { UUIDValueObject } from '../shared/UUIDValueObject';
import { LiveEventID } from './LiveEvent';

export class SetList {
  private constructor(
    public readonly id: SetListId,
    public readonly liveEventId: LiveEventID,
    public songs: SetListSong[],
  ) {
    // TODO: 空のリストを許容しない
    if (songs.length === 0) throw new Error('Songs should not be an empty list')

    // TODO: songsのorderが0以上で順番に連続して並んでいる
  }
  
  // TODO: 作成された
  static of() {}

  // TODO: 編集された

  // TODO: 削除された
}

export class SetListSong {
  private constructor(
    public readonly id: SetListSongId,
    public order: SetListSongOrder,
    public song: Song,
  ) {}

  // TODO: ユーザーから入力された
  static of() {}
}

export class SetListId extends UUIDValueObject {}

export class SetListSongId extends UUIDValueObject {}

export class SetListSongOrder {
  private constructor(
    public readonly value: number,
  ) {
    if (value < 0) throw new Error('Set List Song Order shuold be greater than or equal to 0')

    if (Number.isInteger(value)) throw new Error('Set List Song Order should be an integer')
  }

  static of(value: number): SetListSongOrder {
    return new SetListSongOrder(value)
  }
}