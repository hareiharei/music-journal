import { Song } from '@/modules/domain/Song/Song'

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

export class SetListId {
  constructor(
    public readonly value: string,
  ) {}
}

export class SetListSongId {
  constructor(
    public readonly value: string,
  ) {}
}

export class SetListSongOrder {
  constructor(
    public readonly value: number,
  ) {}
}