import { Song } from '@/modules/domain/Song/Song'
import { UUIDValueObject } from '../shared/UUIDValueObject';

export class SetList {
  constructor(
    public readonly id: SetListId,
    public songs: SetListSong[],
  ) {}
}

export class SetListSong {
  constructor(
    public readonly id: SetListSongId,
    public order: SetListSongOrder,
    public song: Song,
  ) {}
}

export class SetListId extends UUIDValueObject {}

export class SetListSongId extends UUIDValueObject {}

export class SetListSongOrder {
  constructor(
    public readonly value: number,
  ) {}
}