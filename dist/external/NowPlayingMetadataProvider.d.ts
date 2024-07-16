import { MetadataAlbumInfo, MetadataArtistInfo, MetadataSongInfo } from '../api/metadata';
export type NowPlayingMetadataProviderVersion = '1.0.0' | '1.1.0';
export interface NowPlayingMetadataProvider_Current {
    version: '1.1.0';
    getSongInfo: (songTitle: string, albumTitle?: string, artistName?: string, duration?: number, uri?: string) => Promise<MetadataSongInfo | null>;
    getAlbumInfo: (albumTitle: string, artistName?: string, uri?: string) => Promise<MetadataAlbumInfo | null>;
    getArtistInfo: (artistName: string, uri?: string) => Promise<MetadataArtistInfo | null>;
}
export interface NowPlayingMetadataProvider_1_0_0 {
    version: '1.0.0';
    getSongInfo: (songTitle: string, albumTitle?: string, artistName?: string, uri?: string) => Promise<MetadataSongInfo | null>;
    getAlbumInfo: (albumTitle: string, artistName?: string, uri?: string) => Promise<MetadataAlbumInfo | null>;
    getArtistInfo: (artistName: string, uri?: string) => Promise<MetadataArtistInfo | null>;
}
export type NowPlayingMetadataProvider<NowPlayingMetadataProviderVersion = '1.0.0'> = NowPlayingMetadataProviderVersion extends '1.1.0' ? NowPlayingMetadataProvider_Current : NowPlayingMetadataProviderVersion extends '1.0.0' ? NowPlayingMetadataProvider_1_0_0 : never;
//# sourceMappingURL=NowPlayingMetadataProvider.d.ts.map