import GraphSubmissionsWithWeather from "../../models/GraphSubmissionsWithWeather";

export default interface IGraphCanvasWeatherHandler {
    GetGraphSubbmisonsAndWeatherData(courseId: number, startDate: Date, endDate: Date): Promise<GraphSubmissionsWithWeather>;
}