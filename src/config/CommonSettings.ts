import { ActionPanelSettings, DefaultActionPanelSettings } from './ActionPanelSettings.js';
import { BackgroundSettings, DefaultBackgroundSettings } from './BackgroundSettings.js';
import { DefaultIdleScreenSettings, IdleScreenSettings } from './IdleScreenSettings.js';
import { DefaultLocalizationSettings, LocalizationSettings } from './LocalizationSettings.js';
import { DefaultNowPlayingScreenSettings, NowPlayingScreenSettings } from './NowPlayingScreenSettings.js';
import { DefaultPerformanceSettings, PerformanceSettings } from './PerformanceSettings.js';
import { DefaultStartupOptions, StartupOptions } from './StartupOptions.js';
import { DefaultThemeSettings, ThemeSettings } from './ThemeSettings.js';

export enum CommonSettingsCategory {
  Startup = 'startup',
  Theme = 'theme',
  Performance = 'performance',
  Localization = 'localization',
  Background = 'background',
  ActionPanel = 'actionPanel',
  NowPlayingScreen = 'screen.nowPlaying',
  IdleScreen = 'screen.idle'
}

export type CommonSettings = {
  [T in CommonSettingsCategory]: CommonSettingsOf<T>;
}

export const DefaultSettings: CommonSettings = {
  [CommonSettingsCategory.Startup]: DefaultStartupOptions,
  [CommonSettingsCategory.Theme]: DefaultThemeSettings,
  [CommonSettingsCategory.Performance]: DefaultPerformanceSettings,
  [CommonSettingsCategory.Localization]: DefaultLocalizationSettings,
  [CommonSettingsCategory.Background]: DefaultBackgroundSettings,
  [CommonSettingsCategory.ActionPanel]: DefaultActionPanelSettings,
  [CommonSettingsCategory.NowPlayingScreen]: DefaultNowPlayingScreenSettings,
  [CommonSettingsCategory.IdleScreen]: DefaultIdleScreenSettings
} as const;

export type CommonSettingsOf<T extends (CommonRawSettingsOf<any> | CommonSettingsCategory)> = T extends CommonSettingsCategory ? DeepRequired<CommonRawSettingsOf<T>> : DeepRequired<T>;

export type CommonRawSettingsOf<T extends CommonSettingsCategory> =
  T extends CommonSettingsCategory.Startup ? StartupOptions :
  T extends CommonSettingsCategory.Theme ? ThemeSettings :
  T extends CommonSettingsCategory.Performance ? PerformanceSettings :
  T extends CommonSettingsCategory.Localization ? LocalizationSettings :
  T extends CommonSettingsCategory.Background ? BackgroundSettings :
  T extends CommonSettingsCategory.ActionPanel ? ActionPanelSettings :
  T extends CommonSettingsCategory.NowPlayingScreen ? NowPlayingScreenSettings :
  T extends CommonSettingsCategory.IdleScreen ? IdleScreenSettings :
  never;

export type DockComponentPlacement =
  'top-left' | 'top' | 'top-right' |
  'left' | 'right' |
  'bottom-left' | 'bottom' | 'bottom-right';

export type ImageFit = 'cover' | 'contain' | 'fill';
export type WeatherIconStyle = 'filled' | 'outline' | 'mono';

export type BackgroundPosition = 'center' | 'top' | 'left' | 'bottom' | 'right';
export type BackgroundOverlay = 'default' | 'customColor' | 'customGradient' | 'none';

// https://stackoverflow.com/questions/57835286/deep-recursive-requiredt-on-specific-properties
export type DeepRequired<T> = {
  [P in keyof T]-?: DeepRequired<T[P]>
}
