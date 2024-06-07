import { CommonSettingsOf } from './CommonSettings.js';

export interface ContentRegionSettings {
  padding?: 'default' | 'custom';
  npBasicViewPadding?: string;
  npInfoViewPadding?: string;
}

export const DefaultContentRegionSettings: CommonSettingsOf<ContentRegionSettings> = {
  padding: 'default',
  npBasicViewPadding: '',
  npInfoViewPadding: ''
};
