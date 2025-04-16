import { Song } from '@/modules/domain/Song/Song'
import { UUIDValueObject } from '../shared/UUIDValueObject';

export class SetList {
  constructor(
    public readonly id: SetListId,
    public songs: SetListSong[],
  ) {
    // TODO: 空のリストを許容しない

    // TODO: songsのorderが0以上で順番に連続して並んでいる
  }
  
  // TODO: 作成された

  // TODO: 編集された

  // TODO: 削除された
}

export class SetListSong {
  constructor(
    public readonly id: SetListSongId,
    public order: SetListSongOrder,
    public song: Song,
  ) {}

  // ユーザーから入力された
}

export class SetListId extends UUIDValueObject {}

export class SetListSongId extends UUIDValueObject {}

export class SetListSongOrder {
  constructor(
    public readonly value: number,
  ) {
    // TODO: 0以上の整数である
  }

  // システムで割り振られた
}