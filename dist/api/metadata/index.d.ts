export interface MetadataSongInfo {
    title: string;
    description?: string | null;
    image?: string;
    embed?: string;
    embedContents?: {
        linkElements: string[];
        contentParts: string[];
    };
    artist?: MetadataArtistInfo;
    album?: MetadataAlbumInfo;
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
export interface Metadata {
    song?: MetadataSongInfo | null;
    album?: MetadataAlbumInfo | null;
    artist?: MetadataArtistInfo | null;
}
//# sourceMappingURL=index.d.ts.map