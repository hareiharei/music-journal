import { Artist } from "../Artist/Artist";

export class Song {
  constructor(
    public readonly title: SongTitle,
    public readonly artists: Artist[],
    public readonly spotifySongURL: SpotifySongURL | null,
  ) {}

  // TODO: ユーザーに入力された

  // TODO: ユーザーが指定した曲の情報から取得された
}

export class SongTitle {
  constructor(
    public readonly value: string,
  ) {
    // TODO: 空文字を許容しない
  }

  // TODO: ユーザーに入力された

  // TODO: ユーザーが指定した曲の情報から取得された
}

export class SpotifySongURL {
  constructor(
    public readonly value: string,
  ) {}
  
  // TODO: ユーザーが指定した曲の情報から取得された
}