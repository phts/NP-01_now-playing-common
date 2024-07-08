import { CommonSettingsOf } from './CommonSettings.js';

export interface StartupOptions {
  activeScreen?: 'nowPlaying.basicView' |
    'nowPlaying.infoView' | 'nowPlaying.infoView.artist' | 'nowPlaying.infoView.album' | 'nowPlaying.infoView.lyrics' |
    'browse' |
    'volumio';
  activateIdleScreen?: boolean;
}

export const DefaultStartupOptions: CommonSettingsOf<StartupOptions> = {
  activeScreen: 'nowPlaying.basicView',
  activateIdleScreen: false
};
