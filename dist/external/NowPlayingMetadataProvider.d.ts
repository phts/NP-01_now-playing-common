import { MetadataAlbumInfo, MetadataArtistInfo, MetadataSongInfo } from '../api/metadata';
export interface NowPlayingMetadataProvider {
    version: '1.0.0';
    getSongInfo: (songTitle: string, albumTitle?: string, artistName?: string, uri?: string) => Promise<MetadataSongInfo | null>;
    getAlbumInfo: (albumTitle: string, artistName?: string, uri?: string) => Promise<MetadataAlbumInfo | null>;
    getArtistInfo: (artistName: string, uri?: string) => Promise<MetadataArtistInfo | null>;
}
//# sourceMappingURL=NowPlayingMetadataProvider.d.ts.map