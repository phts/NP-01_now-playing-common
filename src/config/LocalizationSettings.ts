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

export const DefaultLocalizationSettings: CommonSettingsOf<LocalizationSettings> = {
  geoCoordinates: '',
  locale: 'matchVolumio',
  resolvedLocale: null,
  timezone: 'matchClient',
  geoTimezone: null,
  resolvedTimezone: null,
  unitSystem: 'metric'
};
