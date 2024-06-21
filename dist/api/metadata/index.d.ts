export interface MetadataSongInfo {
    title: string;
    description?: string | null;
    image?: string;
    artist?: MetadataArtistInfo;
    album?: MetadataAlbumInfo;
    lyrics?: MetadataLyrics;
}
export interface MetadataAlbumInfo {
    title: string;
    description?: string;
    releaseDate?: string;
    image?: string;
    artist?: MetadataArtistInfo;
}
export interface MetadataArtistInfo {
    name: string;
    description?: string;
    image?: string;
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