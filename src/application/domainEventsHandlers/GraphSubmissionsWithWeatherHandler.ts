import IGraphSubmissionsWithWeatherHandler from "../../domain/interfaces/IDomainEventHandlers/IGraphSubmissionsWithWeatherHandler";
import CanvasDataAPIReciverService from "../../infrastructure/recivers/CanvasDataAPIReciverService";
import CanvasDataHandler from "../domainEventsHandlers/CanvasDataHandler";
import WeatherDataAPIReciverService from "../../infrastructure/recivers/WeatherDataAPIReciverService";
import WeatherDataHandler from "../domainEventsHandlers/WeatherDataHandler";
import GraphSubmissionsWithWeather from "../../domain/models/GraphSubmissionsWithWeather";

export default class GraphSubmissionsWithWeatherHandler implements IGraphSubmissionsWithWeatherHandler {

    canvasDataAPIReciverService = new CanvasDataAPIReciverService();
    canvasDataHandler = new CanvasDataHandler(this.canvasDataAPIReciverService);
    weatherDataAPIReciverService = new WeatherDataAPIReciverService();
    weatherDataHandler = new WeatherDataHandler(this.weatherDataAPIReciverService);

    async GetGraphSubbmisonsAndWeatherData(courseId: number, startDate: Date, endDate: Date): Promise<GraphSubmissionsWithWeather> {
        try {
            const dailyWeather = await this.weatherDataHandler.GetDailyWeather(startDate, endDate);
            const grades = await this.canvasDataHandler.GetAllGradedSubmissionFromCourse(courseId);
            return new GraphSubmissionsWithWeather(grades, dailyWeather)
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