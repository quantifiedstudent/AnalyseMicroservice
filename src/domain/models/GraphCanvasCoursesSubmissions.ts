import Course from "./Course";
import DailyWeather from "./DailyWeather";
import Submission from "./Submission";

export default class GraphCanvasCoursesSubmissions {
    canvasSubmissions: Submission[];
    courses: Course[];

  constructor(canvasSubmissions: Submission[], courses: Course[]) {
    this.canvasSubmissions = canvasSubmissions;
    this.courses = courses;
  }
}
