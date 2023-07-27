import { CommonSettingsOf } from './CommonSettings.js';
export interface LocalizationSettings {
    geoCoordinates?: string;
    locale?: string;
    resolvedLocale?: string | null;
    timezone?: string;
    geoTimezone?: string | null;
    resolvedTimezone?: string | null;
    unitSystem?: 'metric' | 'imperial';
}
export declare const DefaultLocalizationSettings: CommonSettingsOf<LocalizationSettings>;
//# sourceMappingURL=LocalizationSettings.d.ts.map