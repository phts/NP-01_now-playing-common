import { CommonSettingsOf } from './CommonSettings.js';

export interface ActionPanelSettings {
  showVolumeSlider?: boolean;
}

export const DefaultActionPanelSettings: CommonSettingsOf<ActionPanelSettings> = {
  showVolumeSlider: true
};
