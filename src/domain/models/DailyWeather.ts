import DailyWeatherDTO from "../../infrastructure/dto/DailyWeatherDTO";

export default class DailyWeather {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: DailyUnits;
  daily: DailyData;

  constructor(data: DailyWeatherDTO) {
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.generationtime_ms = data.generationtime_ms;
    this.utc_offset_seconds = data.utc_offset_seconds;
    this.timezone = data.timezone;
    this.timezone_abbreviation = data.timezone_abbreviation;
    this.elevation = data.elevation;
    this.daily_units = new DailyUnits(data.daily_units);
    this.daily = new DailyData(data.daily);
  }
}
class DailyUnits {
  time: string;
  temperature_2m_mean: string;
  sunrise: string;
  sunset: string;
  precipitation_sum: string;
  rain_sum: string;
  snowfall_sum: string;
  windspeed_10m_max: string;

  constructor(data: DailyUnits) {
    this.time = data.time;
    this.temperature_2m_mean = data.temperature_2m_mean;
    this.sunrise = data.sunrise;
    this.sunset = data.sunset;
    this.precipitation_sum = data.precipitation_sum;
    this.rain_sum = data.rain_sum;
    this.snowfall_sum = data.snowfall_sum;
    this.windspeed_10m_max = data.windspeed_10m_max;
  }
}

class DailyData {
  time: string[];
  temperature_2m_mean: number[];
  sunrise: string[];
  sunset: string[];
  precipitation_sum: number[];
  rain_sum: number[];
  snowfall_sum: number[];
  windspeed_10m_max: number[];

  constructor(data: DailyData) {
    this.time = data.time;
    this.temperature_2m_mean = data.temperature_2m_mean;
    this.sunrise = data.sunrise;
    this.sunset = data.sunset;
    this.precipitation_sum = data.precipitation_sum;
    this.rain_sum = data.rain_sum;
    this.snowfall_sum = data.snowfall_sum;
    this.windspeed_10m_max = data.windspeed_10m_max;
  }
}