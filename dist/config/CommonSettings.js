"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSettings = exports.CommonSettingsCategory = void 0;
const ActionPanelSettings_js_1 = require("./ActionPanelSettings.js");
const BackgroundSettings_js_1 = require("./BackgroundSettings.js");
const IdleScreenSettings_js_1 = require("./IdleScreenSettings.js");
const LocalizationSettings_js_1 = require("./LocalizationSettings.js");
const NowPlayingScreenSettings_js_1 = require("./NowPlayingScreenSettings.js");
const PerformanceSettings_js_1 = require("./PerformanceSettings.js");
const StartupOptions_js_1 = require("./StartupOptions.js");
const ThemeSettings_js_1 = require("./ThemeSettings.js");
var CommonSettingsCategory;
(function (CommonSettingsCategory) {
    CommonSettingsCategory["Startup"] = "startup";
    CommonSettingsCategory["Theme"] = "theme";
    CommonSettingsCategory["Performance"] = "performance";
    CommonSettingsCategory["Localization"] = "localization";
    CommonSettingsCategory["Background"] = "background";
    CommonSettingsCategory["ActionPanel"] = "actionPanel";
    CommonSettingsCategory["NowPlayingScreen"] = "screen.nowPlaying";
    CommonSettingsCategory["IdleScreen"] = "screen.idle";
})(CommonSettingsCategory = exports.CommonSettingsCategory || (exports.CommonSettingsCategory = {}));
exports.DefaultSettings = {
    [CommonSettingsCategory.Startup]: StartupOptions_js_1.DefaultStartupOptions,
    [CommonSettingsCategory.Theme]: ThemeSettings_js_1.DefaultThemeSettings,
    [CommonSettingsCategory.Performance]: PerformanceSettings_js_1.DefaultPerformanceSettings,
    [CommonSettingsCategory.Localization]: LocalizationSettings_js_1.DefaultLocalizationSettings,
    [CommonSettingsCategory.Background]: BackgroundSettings_js_1.DefaultBackgroundSettings,
    [CommonSettingsCategory.ActionPanel]: ActionPanelSettings_js_1.DefaultActionPanelSettings,
    [CommonSettingsCategory.NowPlayingScreen]: NowPlayingScreenSettings_js_1.DefaultNowPlayingScreenSettings,
    [CommonSettingsCategory.IdleScreen]: IdleScreenSettings_js_1.DefaultIdleScreenSettings
};
//# sourceMappingURL=CommonSettings.js.map