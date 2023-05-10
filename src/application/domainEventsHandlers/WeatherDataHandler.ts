import IWeatherDataAPIReciverService from "../../domain/interfaces/IAPIReciverServices/IWeatherDataAPIReciverService";
import IWeatherDataHandler from "../../domain/interfaces/IDomainEventHandlers/IWeatherDataHandler";
import DailyWeather from "../../domain/models/DailyWeather";

export default class WeatherDataHandler implements IWeatherDataHandler {
  weatherDataAPIReciverService: IWeatherDataAPIReciverService;

  constructor(weatherDataAPIReciverService: IWeatherDataAPIReciverService) {
    this.weatherDataAPIReciverService = weatherDataAPIReciverService;
  }
  async GetDailyWeather(
    startDate: Date,
    endDate: Date
  ): Promise<DailyWeather> {
    try {
      const dailyWeatherDTO =
        await this.weatherDataAPIReciverService.GetDailyWeather(
          startDate,
          endDate
        );
      const dailyWeather = new DailyWeather(dailyWeatherDTO);
      return dailyWeather;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      // we'll proceed, but let's report it
      console.error(message);
      console.log(error);
      return Promise.reject(error);
    }
  }
}
