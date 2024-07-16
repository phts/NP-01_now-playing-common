import { NowPlayingMetadataProvider } from './NowPlayingMetadataProvider.js';
export interface NowPlayingPluginSupport {
    getNowPlayingMetadataProvider: <NowPlayingMetadataProviderVersion>() => NowPlayingMetadataProvider<NowPlayingMetadataProviderVersion> | null;
}
//# sourceMappingURL=NowPlayingPluginSupport.d.ts.map