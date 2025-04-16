import { Song } from '@/modules/domain/Song/Song'
import { UUIDValueObject } from '../shared/UUIDValueObject';
import { LiveEventID } from './LiveEvent';

export class SetList {
  private constructor(
    public readonly id: SetListID,
    public readonly liveEventID: LiveEventID,
    public songs: SetListSong[],
  ) {
    if (songs.length === 0) throw new Error('Songs should not be an empty list')

    // TODO: songsのorderが0以上で順番に連続して並んでいる
  }
  
  static create(
    liveEventID: LiveEventID,
    songs: SetListSong[],
  ) {
    return new SetList(
      SetListID.new(),
      liveEventID,
      songs,
    )
  }

  // TODO: 編集された

  // TODO: 削除された
}

export class SetListSong {
  private constructor(
    public readonly id: SetListSongID,
    public order: SetListSongOrder,
    public song: Song,
  ) {}

  static of(
    order: number,
    song: Song,
  ) {
    return new SetListSong(
      SetListSongID.new(),
      SetListSongOrder.of(order),
      song,
    )
  }
}

export class SetListID extends UUIDValueObject {}

export class SetListSongID extends UUIDValueObject {}

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