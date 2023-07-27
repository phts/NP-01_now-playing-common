export interface WeatherDataTemp {
    value: number;
    text: string;
    shortText: string;
}
export interface WeatherDataHumidity {
    value: number;
    text: string;
}
export interface WeatherDataWindSpeed {
    value: number;
    text: string;
}
export interface WeatherDataIconUrl {
    condition: WeatherDataIconStyledUrl;
    humidity: WeatherDataIconStyledUrl;
    windSpeed: WeatherDataIconStyledUrl;
}
export interface WeatherDataIconStyledUrl extends Record<string, string> {
    filledStatic: string;
    filledAnimated: string;
    outlineStatic: string;
    outlineAnimated: string;
    monoStatic: string;
    monoAnimated: string;
}
export interface WeatherDataLocation {
    name: string;
    country: string;
}
export interface WeatherDataCurrent {
    temp: {
        now: WeatherDataTemp;
        min: WeatherDataTemp;
        max: WeatherDataTemp;
    };
    humidity: WeatherDataHumidity;
    windSpeed: WeatherDataWindSpeed;
    iconUrl: WeatherDataIconUrl;
}
export interface WeatherDataForecastDay {
    temp: {
        min: WeatherDataTemp;
        max: WeatherDataTemp;
    };
    humidity: WeatherDataHumidity;
    windSpeed: WeatherDataWindSpeed;
    iconUrl: WeatherDataIconUrl;
    dateTimeMillis: number;
}
export interface WeatherDataHourly {
    temp: WeatherDataTemp;
    humidity: WeatherDataHumidity;
    windSpeed: WeatherDataWindSpeed;
    iconUrl: WeatherDataIconUrl;
    dateTimeMillis: number;
}
export interface WeatherData {
    location: WeatherDataLocation;
    current: WeatherDataCurrent;
    forecast: WeatherDataForecastDay[];
    hourly: WeatherDataHourly[];
    units: 'metric' | 'imperial' | 'standard';
}
//# sourceMappingURL=index.d.ts.map