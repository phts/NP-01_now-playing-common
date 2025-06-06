import { BackgroundOverlay, BackgroundPosition, ImageFit, CommonSettingsOf, WeatherIconStyle } from './CommonSettings.js';
export interface IdleScreenSettings {
    enabled?: 'all' | 'disabled' | 'kiosk';
    waitTime?: number;
    showClock?: boolean;
    showLocation?: boolean;
    showWeather?: boolean;
    mainAlignment?: 'flex-start' | 'center' | 'flex-end' | 'cycle';
    mainAlignmentCycleInterval?: number;
    timeFormat?: 'default' | 'custom';
    hour24?: boolean;
    showSeconds?: boolean;
    fontSizes?: 'auto' | 'custom';
    timeFontSize?: string;
    dateFontSize?: string;
    locationFontSize?: string;
    weatherCurrentBaseFontSize?: string;
    weatherForecastBaseFontSize?: string;
    fontColors?: 'default' | 'custom';
    timeColor?: string;
    dateColor?: string;
    locationColor?: string;
    weatherCurrentColor?: string;
    weatherForecastColor?: string;
    weatherIconSettings?: 'default' | 'custom';
    weatherIconStyle?: WeatherIconStyle;
    weatherCurrentIconSize?: string;
    weatherForecastIconSize?: string;
    weatherCurrentIconMonoColor?: string;
    weatherForecastIconMonoColor?: string;
    weatherCurrentIconAnimate?: boolean;
    backgroundType?: 'unsplash' | 'color' | 'volumioBackground' | 'myBackground';
    backgroundColor?: string;
    volumioBackgroundImage?: string;
    volumioBackgroundFit?: ImageFit;
    volumioBackgroundPosition?: BackgroundPosition;
    volumioBackgroundBlur?: string;
    volumioBackgroundScale?: string;
    myBackgroundImageType?: 'random' | 'fixed';
    myBackgroundImage?: string;
    myBackgroundRandomRefreshInterval?: number;
    myBackgroundFit?: ImageFit;
    myBackgroundPosition?: BackgroundPosition;
    myBackgroundBlur?: string;
    myBackgroundScale?: string;
    unsplashKeywords?: string;
    unsplashKeywordsAppendDayPeriod?: boolean;
    unsplashMatchScreenSize?: boolean;
    unsplashRefreshInterval?: number;
    unsplashBackgroundBlur?: string;
    backgroundOverlay?: BackgroundOverlay;
    backgroundOverlayColor?: string;
    backgroundOverlayColorOpacity?: string;
    backgroundOverlayGradient?: string;
    backgroundOverlayGradientOpacity?: string;
    weatherBackground?: BackgroundOverlay;
    weatherBackgroundColor?: string;
    weatherBackgroundColorOpacity?: string;
    weatherBackgroundGradient?: string;
    weatherBackgroundGradientOpacity?: string;
    weatherAreaHeightType?: 'auto' | 'custom';
    weatherAreaHeight?: string;
}
export declare const DefaultIdleScreenSettings: CommonSettingsOf<IdleScreenSettings>;
//# sourceMappingURL=IdleScreenSettings.d.ts.map