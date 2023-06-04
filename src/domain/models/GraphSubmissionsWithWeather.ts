import DailyWeather from "./DailyWeather";
import Submission from "./Submission";

export type WeatherOfTheDay = {
    date: string;
    temperature: number;
}
export type SubmissionWithDate = {
    iD: number;
    date: string;
}

export default class GraphSubmissionsWithWeather {

    submissions: SubmissionWithDate[];
    temperature: WeatherOfTheDay[];

    constructor(canvasSubmissions: Submission[], dailyWeather: DailyWeather) {
        this.submissions = canvasSubmissions.map(val => ({
            iD: val.assignment_id,
            date: val.submittedAtString
        } as SubmissionWithDate))

        this.temperature = []

        for (let i = 0; i < dailyWeather.daily.temperature_2m_mean.length && i < dailyWeather.daily.time.length; i++) {
            const newItem: WeatherOfTheDay = {
                date: dailyWeather.daily.time[i],
                temperature: dailyWeather.daily.temperature_2m_mean[i]
            }

            this.temperature.push(newItem);

        }

    }
}
