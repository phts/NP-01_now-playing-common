import { ActionPanelSettings } from './ActionPanelSettings.js';
import { BackgroundSettings } from './BackgroundSettings.js';
import { IdleScreenSettings } from './IdleScreenSettings.js';
import { LocalizationSettings } from './LocalizationSettings.js';
import { NowPlayingScreenSettings } from './NowPlayingScreenSettings.js';
import { PerformanceSettings } from './PerformanceSettings.js';
import { StartupOptions } from './StartupOptions.js';
import { ThemeSettings } from './ThemeSettings.js';
export declare enum CommonSettingsCategory {
    Startup = "startup",
    Theme = "theme",
    Performance = "performance",
    Localization = "localization",
    Background = "background",
    ActionPanel = "actionPanel",
    NowPlayingScreen = "screen.nowPlaying",
    IdleScreen = "screen.idle"
}
export type CommonSettings = {
    [T in CommonSettingsCategory]: CommonSettingsOf<T>;
};
export declare const DefaultSettings: CommonSettings;
export type CommonSettingsOf<T extends (CommonRawSettingsOf<any> | CommonSettingsCategory)> = T extends CommonSettingsCategory ? DeepRequired<CommonRawSettingsOf<T>> : DeepRequired<T>;
export type CommonRawSettingsOf<T extends CommonSettingsCategory> = T extends CommonSettingsCategory.Startup ? StartupOptions : T extends CommonSettingsCategory.Theme ? ThemeSettings : T extends CommonSettingsCategory.Performance ? PerformanceSettings : T extends CommonSettingsCategory.Localization ? LocalizationSettings : T extends CommonSettingsCategory.Background ? BackgroundSettings : T extends CommonSettingsCategory.ActionPanel ? ActionPanelSettings : T extends CommonSettingsCategory.NowPlayingScreen ? NowPlayingScreenSettings : T extends CommonSettingsCategory.IdleScreen ? IdleScreenSettings : never;
export type DockComponentPlacement = 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right';
export type ImageFit = 'cover' | 'contain' | 'fill';
export type WeatherIconStyle = 'filled' | 'outline' | 'mono';
export type BackgroundPosition = 'center' | 'top' | 'left' | 'bottom' | 'right';
export type BackgroundOverlay = 'default' | 'customColor' | 'customGradient' | 'none';
export type DeepRequired<T> = {
    [P in keyof T]-?: DeepRequired<T[P]>;
};
//# sourceMappingURL=CommonSettings.d.ts.map