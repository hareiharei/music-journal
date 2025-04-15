export class Artist {
  constructor(
    public readonly name: ArtistName,
    public readonly spotifyArtistURL: SpotifyArtistURL | null,
  ) {}
}

export class ArtistName {
  constructor(
    public readonly value: string
  ) {}
}

export class SpotifyArtistURL {
  constructor(
    public readonly value: string
  ) {}
}