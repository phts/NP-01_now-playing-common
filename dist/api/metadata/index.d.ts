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
export type MetadataLyrics = {
    type: 'synced';
    lines: {
        text: string;
        start: number;
    }[];
} | {
    type: 'plain';
    lines: string[];
} | {
    type: 'html';
    lines: string;
};
export interface Metadata {
    song?: MetadataSongInfo | null;
    album?: MetadataAlbumInfo | null;
    artist?: MetadataArtistInfo | null;
}
//# sourceMappingURL=index.d.ts.map