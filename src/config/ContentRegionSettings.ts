import { CommonSettingsOf } from './CommonSettings.js';

export interface ContentRegionSettings {
  padding?: 'default' | 'custom';
  npBasicViewPadding?: string;
  npBasicViewPaddingPortrait?: string;
  npInfoViewPadding?: string;
  npInfoViewPaddingPortrait?: string;
}

export const DefaultContentRegionSettings: CommonSettingsOf<ContentRegionSettings> = {
  padding: 'default',
  npBasicViewPadding: '',
  npBasicViewPaddingPortrait: '',
  npInfoViewPadding: '',
  npInfoViewPaddingPortrait: ''
};
