import { CommonSettingsOf } from './CommonSettings.js';
export interface PerformanceSettings {
    transitionEffectsKiosk?: boolean;
    transitionEffectsOtherDevices?: boolean;
    unmountScreensOnExit?: 'default' | 'custom';
    unmountNowPlayingScreenOnExit?: boolean;
    unmountBrowseScreenOnExit?: boolean;
    unmountQueueScreenOnExit?: boolean;
    unmountVolumioScreenOnExit?: boolean;
    syncedLyricsDelay?: number;
}
export declare const DefaultPerformanceSettings: CommonSettingsOf<PerformanceSettings>;
//# sourceMappingURL=PerformanceSettings.d.ts.map