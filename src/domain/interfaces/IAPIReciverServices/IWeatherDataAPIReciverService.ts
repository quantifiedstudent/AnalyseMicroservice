import DailyWeatherDTO from "../../../infrastructure/dto/DailyWeatherDTO";

export default interface IWeatherDataAPIReciverService{
    GetDailyWeather(startDate: Date, endDate: Date): Promise<DailyWeatherDTO>;
}