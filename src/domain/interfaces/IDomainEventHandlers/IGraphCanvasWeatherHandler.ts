import GraphCanvasWeather from "../../models/GraphCanvasWeather";

export default interface IGraphCanvasWeatherHandler {
    GetGraphCanvasWeatherData(courseId: number, startDate: Date, endDate: Date): Promise<GraphCanvasWeather>;
}