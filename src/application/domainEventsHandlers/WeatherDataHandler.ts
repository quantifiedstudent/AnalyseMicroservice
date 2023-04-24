import IWeatherDataAPIReciverService from "../../domain/interfaces/IAPIReciverServices/IWeatherDataAPIReciverService";
import IWeatherDataHandler from "../../domain/interfaces/IDomainEventHandlers/IWeatherDataHandler";

export class WeatherDataHandler implements IWeatherDataHandler {
  weatherDataAPIReciverService: IWeatherDataAPIReciverService;

  constructor(weatherDataAPIReciverService: IWeatherDataAPIReciverService) {
    this.weatherDataAPIReciverService = weatherDataAPIReciverService;
  }
}
