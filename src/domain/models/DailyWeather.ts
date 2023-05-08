import DailyWeatherDTO from "../../infrastructure/dto/DailyWeatherDTO";

export class DailyWeather {
  date: string;
  tavg: number;
  tmin: number;
  tmax: number;
  prcp: number;
  snow: null | number;
  wdir: number;
  wspd: number;
  wpgt: number;
  pres: number;
  tsun: null | number;

  constructor(dailyWeatherDTO: DailyWeatherDTO) {
    this.date = dailyWeatherDTO.date;
    this.tavg = dailyWeatherDTO.tavg;
    this.tmin = dailyWeatherDTO.tmin;
    this.tmax = dailyWeatherDTO.tmax;
    this.prcp = dailyWeatherDTO.prcp;
    this.snow = dailyWeatherDTO.snow;
    this.wdir = dailyWeatherDTO.wdir;
    this.wspd = dailyWeatherDTO.wspd;
    this.wpgt = dailyWeatherDTO.wpgt;
    this.pres = dailyWeatherDTO.pres;
    this.tsun = dailyWeatherDTO.tsun;
  }
}
