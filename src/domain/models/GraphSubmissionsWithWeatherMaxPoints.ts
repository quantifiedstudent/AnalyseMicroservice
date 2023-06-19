import DailyWeather from "./DailyWeather";
import Submission from "./Submission";
import { GradedCriteria } from "./Submission";

export type WeatherOfTheDay = {
    date: string;
    temperature: number;
}
export type SubmissionScoreWithDate = {
    date: string;
    gradedCriteria: GradedCriteria[],
}

export default class GraphSubmissionsWithWeather {

    submissions: SubmissionScoreWithDate[];
    temperature: WeatherOfTheDay[];

    constructor(canvasSubmissions: Submission[], dailyWeather: DailyWeather) {
        this.submissions = canvasSubmissions.map(val => ({
            date: val.submittedAtString,
            gradedCriteria: val.full_rubric_assessment?.criterias,
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
