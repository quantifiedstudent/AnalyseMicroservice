import IGraphCanvasWeatherHandler from "../../domain/interfaces/IDomainEventHandlers/IGraphCanvasWeatherHandler";
import CanvasDataAPIReciverService from "../../infrastructure/recivers/CanvasDataAPIReciverService";
import CanvasDataHandler from "../domainEventsHandlers/CanvasDataHandler";
import WeatherDataAPIReciverService from "../../infrastructure/recivers/WeatherDataAPIReciverService";
import WeatherDataHandler from "../domainEventsHandlers/WeatherDataHandler";
import GraphCanvasWeather from "../../domain/models/GraphCanvasWeather";

export default class GraphCanvasWeatherHandler implements IGraphCanvasWeatherHandler {
    
    canvasDataAPIReciverService = new CanvasDataAPIReciverService();
    canvasDataHandler = new CanvasDataHandler(this.canvasDataAPIReciverService);
    weatherDataAPIReciverService = new WeatherDataAPIReciverService();
    weatherDataHandler = new WeatherDataHandler(this.weatherDataAPIReciverService);

    async GetGraphCanvasWeatherData(courseId: number, startDate: Date, endDate: Date): Promise<GraphCanvasWeather> {
      try {

        const dailyWeather = await this.weatherDataHandler.GetDailyWeather(startDate, endDate);
        const grades = await this.canvasDataHandler.GetAllGradedSubmissionFromCourse(courseId);

        // for (let weather of dailyWeather)
        // {
        //     for(let grade in grades)
        //     {
        //         // submission is not an Array
        //         // add grades and then loop thorugh them
        //         if (weather.date === grade.sub)
        //     }
        // }
        return new GraphCanvasWeather(grades, dailyWeather);
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
  