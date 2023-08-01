import { BackgroundOverlay, BackgroundPosition, ImageFit, CommonSettingsOf } from './CommonSettings.js';

export interface BackgroundSettings {
  backgroundType?: 'default' | 'albumart' | 'color' | 'volumioBackground' | 'myBackground';

  // Background type: color
  backgroundColor?: string;

  // Background type: albumart
  albumartBackgroundFit?: ImageFit;
  albumartBackgroundPosition?: BackgroundPosition;
  albumartBackgroundBlur?: string;
  albumartBackgroundScale?: string;

  // Background type: Volumio background
  volumioBackgroundImage?: string;
  volumioBackgroundFit?: ImageFit;
  volumioBackgroundPosition?: BackgroundPosition;
  volumioBackgroundBlur?: string;
  volumioBackgroundScale?: string;

  // Background type: My background
  myBackgroundImageType?: 'random' | 'fixed';
  myBackgroundImage?: string;
  myBackgroundRandomRefreshInterval?: number;
  myBackgroundRandomRefreshOnTrackChange?: boolean;
  myBackgroundFit?: ImageFit;
  myBackgroundPosition?: BackgroundPosition;
  myBackgroundBlur?: string;
  myBackgroundScale?: string;

  // Overlay
  backgroundOverlay?: BackgroundOverlay;
  backgroundOverlayColor?: string;
  backgroundOverlayColorOpacity?: string;
  backgroundOverlayGradient?: string;
  backgroundOverlayGradientOpacity?: string;
}

export const DefaultBackgroundSettings: CommonSettingsOf<BackgroundSettings> = {
  backgroundType: 'default',

  // Background type: color
  backgroundColor: '#000000',

  // Background type: albumart
  albumartBackgroundFit: 'cover',
  albumartBackgroundPosition: 'center',
  albumartBackgroundBlur: '',
  albumartBackgroundScale: '',

  // Background type: Volumio background
  volumioBackgroundImage: '',
  volumioBackgroundFit: 'cover',
  volumioBackgroundPosition: 'center',
  volumioBackgroundBlur: '',
  volumioBackgroundScale: '',

  // Background type: My background
  myBackgroundImageType: 'random',
  myBackgroundImage: '',
  myBackgroundRandomRefreshInterval: 0,
  myBackgroundRandomRefreshOnTrackChange: true,
  myBackgroundFit: 'cover',
  myBackgroundPosition: 'center',
  myBackgroundBlur: '',
  myBackgroundScale: '',

  // Overlay
  backgroundOverlay: 'default',
  backgroundOverlayColor: '#000000',
  backgroundOverlayColorOpacity: '',
  backgroundOverlayGradient: '',
  backgroundOverlayGradientOpacity: ''
};
