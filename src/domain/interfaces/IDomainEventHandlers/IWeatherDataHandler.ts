import DailyWeather from "../../models/DailyWeather";

export default interface IWeatherDataHandler{
    GetDailyWeather(startDate: Date, endDate: Date): Promise<DailyWeather>
}