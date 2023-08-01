import { BackgroundOverlay, BackgroundPosition, ImageFit, CommonSettingsOf } from './CommonSettings.js';
export interface BackgroundSettings {
    backgroundType?: 'default' | 'albumart' | 'color' | 'volumioBackground' | 'myBackground';
    backgroundColor?: string;
    albumartBackgroundFit?: ImageFit;
    albumartBackgroundPosition?: BackgroundPosition;
    albumartBackgroundBlur?: string;
    albumartBackgroundScale?: string;
    volumioBackgroundImage?: string;
    volumioBackgroundFit?: ImageFit;
    volumioBackgroundPosition?: BackgroundPosition;
    volumioBackgroundBlur?: string;
    volumioBackgroundScale?: string;
    myBackgroundImageType?: 'random' | 'fixed';
    myBackgroundImage?: string;
    myBackgroundRandomRefreshInterval?: number;
    myBackgroundRandomRefreshOnTrackChange?: boolean;
    myBackgroundFit?: ImageFit;
    myBackgroundPosition?: BackgroundPosition;
    myBackgroundBlur?: string;
    myBackgroundScale?: string;
    backgroundOverlay?: BackgroundOverlay;
    backgroundOverlayColor?: string;
    backgroundOverlayColorOpacity?: string;
    backgroundOverlayGradient?: string;
    backgroundOverlayGradientOpacity?: string;
}
export declare const DefaultBackgroundSettings: CommonSettingsOf<BackgroundSettings>;
//# sourceMappingURL=BackgroundSettings.d.ts.map