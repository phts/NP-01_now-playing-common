export interface MetadataSongInfo {
  title: string;
  description?: string | null;
  image?: string | null;
  artist?: MetadataArtistInfo | null;
  album?: MetadataAlbumInfo | null;
  lyrics?: MetadataLyrics | null;
}

export interface MetadataAlbumInfo {
  title: string;
  description?: string | null;
  releaseDate?: string | null;
  image?: string | null;
  artist?: MetadataArtistInfo | null;
}

export interface MetadataArtistInfo {
  name: string;
  description?: string | null;
  image?: string | null;
}

export interface MetadataSyncedLyrics {
  type: 'synced';
  lines: {
    text: string;
    start: number; // Milliseconds
    end?: number; // Milliseconds
  }[];
}

export interface MetadataPlainLyrics {
  type: 'plain';
  lines: string[];
}

export interface MetadataHtmlLyrics {
  type: 'html';
  lines: string;
}

export type MetadataLyrics = MetadataSyncedLyrics | MetadataPlainLyrics | MetadataHtmlLyrics;

export interface Metadata {
  song?: MetadataSongInfo | null;
  album?: MetadataAlbumInfo | null;
  artist?: MetadataArtistInfo | null;
}
