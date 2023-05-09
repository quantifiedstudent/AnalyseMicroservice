import DailyWeatherDTO from "../../infrastructure/dto/DailyWeatherDTO";
import { DailyWeather } from "./DailyWeather";
import Submission from "./Submission";

export default class GraphCanvasWeather {
    canvasSubmissions: Submission[];
    dailyWeather: DailyWeather[];

  constructor(canvasSubmissions: Submission[], dailyWeather: DailyWeather[]) {
    this.canvasSubmissions = canvasSubmissions;
    this.dailyWeather = dailyWeather;
  }
}
