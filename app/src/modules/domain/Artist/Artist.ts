import { isEmptyString, isNullOrEmptyString } from "@/shared/util/check"

export class Artist {
  private constructor(
    public readonly name: ArtistName,
    public readonly spotifyArtistURL: SpotifyArtistURL | null,
  ) {}

  static of(
    name: string,
    spotifyArtistURL: string | null
  ): Artist {
    return new Artist(
      ArtistName.of(name),
      isNullOrEmptyString(spotifyArtistURL) ? null : SpotifyArtistURL.of(spotifyArtistURL)
    )
  }

  // TODO: ユーザーに指定された曲またはアーティストの情報から取得された
}

export class ArtistName {
  private constructor(
    public readonly value: string
  ) {
    if (isEmptyString(value)) throw new Error('Artist Name should not be an empty string')
  }

  static of(value: string): ArtistName {
    return new ArtistName(value)
  }

  // TODO: ユーザーに指定された曲またはアーティストの情報から取得された
}

export class SpotifyArtistURL {
  constructor(
    public readonly value: string
  ) {
    if (isEmptyString(value)) throw new Error('Spotify Artist URL should not be an empty string')
  }
  // TODO: ユーザーに指定された曲またはアーティストの情報から取得された
  static of(value: string): SpotifyArtistURL {
    return new SpotifyArtistURL(value)
  }
}