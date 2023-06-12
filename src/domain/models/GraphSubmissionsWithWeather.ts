import DailyWeather from "./DailyWeather";
import Submission from "./Submission";

export type WeatherOfTheDay = {
    date: string;
    temperature: number;
}
export type SubmissionScoreWithDate = {
    date: string;
    score: number;
}

export default class GraphSubmissionsWithWeather {

    submissions: SubmissionScoreWithDate[];
    temperature: WeatherOfTheDay[];

    constructor(canvasSubmissions: Submission[], dailyWeather: DailyWeather) {
        this.submissions = canvasSubmissions.map(val => ({
            date: val.submittedAtString,
            score: val.full_rubric_assessment?.score != null ? val.full_rubric_assessment?.score : 0
        } as SubmissionScoreWithDate))

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
