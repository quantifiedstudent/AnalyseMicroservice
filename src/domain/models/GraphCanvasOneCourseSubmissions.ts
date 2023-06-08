import Course from "./Course";
import DailyWeather from "./DailyWeather";
import SubmissionInCourse from "./SubmissionInCourse";

export default class GraphCanvasOneCourseSubmissions {
    canvasSubmissions: SubmissionInCourse[];
    courseId: number;

  constructor(canvasSubmissions: SubmissionInCourse[], courseId: number) {
    this.canvasSubmissions = canvasSubmissions;
    this.courseId = courseId;
  }
}
