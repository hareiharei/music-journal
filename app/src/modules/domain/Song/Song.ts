import { isNullOrEmptyString } from "@/modules/util/check";
import { Artist } from "../Artist/Artist";

export class Song {
  constructor(
    public readonly title: SongTitle,
    public readonly artists: Artist[],
    public readonly spotifySongURL: SpotifySongURL | null,
  ) {}

  // TODO: ユーザーに入力された
  static of(
    title: string,
    artists: Artist[],
    spotifySongURL: string | null,
  ) {
    return new Song(
      SongTitle.of(title),
      artists,
      isNullOrEmptyString(spotifySongURL) ? null : SpotifySongURL.of(spotifySongURL),
    )
  }

  // TODO: ユーザーが指定した曲の情報から取得された
}

export class SongTitle {
  private constructor(
    public readonly value: string,
  ) {
    if (value === '') throw new Error('Song Title should not be an empty string')
  }

  static of(value: string): SongTitle {
    return new SongTitle(value)
  }

  // TODO: ユーザーが指定した曲の情報から取得された
}

export class SpotifySongURL {
  private constructor(
    public readonly value: string,
  ) {
    if (value === '') throw new Error('Spotify Song URL should not be an empty string')
  }
  
  // TODO: ユーザーが指定した曲の情報から取得された
  static of(value: string): SpotifySongURL {
    return new SpotifySongURL(value)
  }
}