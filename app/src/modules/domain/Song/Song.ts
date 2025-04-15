import { Artist } from "../Artist/Artist";

export class Song {
  constructor(
    public readonly title: SongTitle,
    public readonly artists: Artist[],
    public readonly spotifySongURL: SpotifySongURL | null,
  ) {}
}

export class SongTitle {
  constructor(
    public readonly value: string,
  ) {}
}

export class SpotifySongURL {
  constructor(
    public readonly value: string,
  ) {}
}