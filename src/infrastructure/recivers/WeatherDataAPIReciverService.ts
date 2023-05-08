import fetch from "node-fetch";
import IWeatherDataAPIReciverService from "../../domain/interfaces/IAPIReciverServices/IWeatherDataAPIReciverService";
import DailyWeatherDTO from "../dto/DailyWeatherDTO";

export default class WeatherDataAPIReciverService implements IWeatherDataAPIReciverService {
    url: string = "http://localhost:7001";
    parameters = (startDate: Date, endDate: Date) => `?startDate=${startDate.toISOString().split('T')[0]}&endDate=${endDate.toISOString().split('T')[0]}`;
  
    async GetDailyWeather(startDate: Date, endDate: Date): Promise<DailyWeatherDTO[]> {
      const apiRoute = `/dailyWeather`;
      const options = {
        method: "GET",
      };
  
      try {
        const response = await fetch(this.url + apiRoute + this.parameters(startDate, endDate), options);
        const data = await response.json();
        return <DailyWeatherDTO[]>data;
      } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        // we'll proceed, but let's report it
        console.error(message);
        return Promise.reject(error);
      }
    }
}