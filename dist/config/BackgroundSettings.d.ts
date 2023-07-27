import { BackgroundOverlay, BackgroundPosition, ImageFit, CommonSettingsOf } from './CommonSettings.js';
export interface BackgroundSettings {
    backgroundType?: 'default' | 'albumart' | 'color' | 'volumioBackground';
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
    backgroundOverlay?: BackgroundOverlay;
    backgroundOverlayColor?: string;
    backgroundOverlayColorOpacity?: string;
    backgroundOverlayGradient?: string;
    backgroundOverlayGradientOpacity?: string;
}
export declare const DefaultBackgroundSettings: CommonSettingsOf<BackgroundSettings>;
//# sourceMappingURL=BackgroundSettings.d.ts.map