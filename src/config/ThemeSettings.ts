import { CommonSettingsOf } from './CommonSettings.js';

export interface ThemeSettings {
  active?: string;
}

export const DefaultThemeSettings: CommonSettingsOf<ThemeSettings> = {
  active: 'default'
};
