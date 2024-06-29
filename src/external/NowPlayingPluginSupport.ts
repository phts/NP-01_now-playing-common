import { NowPlayingMetadataProvider } from './NowPlayingMetadataProvider.js';

export interface NowPlayingPluginSupport {
  getNowPlayingMetadataProvider: () => NowPlayingMetadataProvider | null;
}
