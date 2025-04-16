export class Artist {
  constructor(
    public readonly name: ArtistName,
    public readonly spotifyArtistURL: SpotifyArtistURL | null,
  ) {}

  // TODO: ユーザーに入力された

  // TODO: ユーザーに指定された曲またはアーティストの情報から取得された
}

export class ArtistName {
  constructor(
    public readonly value: string
  ) {
    // TODO: 空文字を許容しない
  }

  // TODO: ユーザーに入力された

  // TODO: ユーザーに指定された曲またはアーティストの情報から取得された
}

export class SpotifyArtistURL {
  constructor(
    public readonly value: string
  ) {
    
    // TODO: 空文字を許容しない
  }
  // TODO: ユーザーに指定された曲またはアーティストの情報から取得された
}