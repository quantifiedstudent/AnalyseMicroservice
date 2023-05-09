import CanvasDataAPIReciverService from "../../infrastructure/recivers/CanvasDataAPIReciverService";
import CanvasDataHandler from "./CanvasDataHandler";
import GraphCanvasCoursesSubmissions from "../../domain/models/GraphCanvasCoursesSubmissions";
import IGraphCanvasCoursesSubmissions from "../../domain/interfaces/IDomainEventHandlers/IGraphCanvasCoursesSubmissionsHandler";

export default class GraphCanvasCoursesSubmissionsHandler implements IGraphCanvasCoursesSubmissions {
    
    canvasDataAPIReciverService = new CanvasDataAPIReciverService();
    canvasDataHandler = new CanvasDataHandler(this.canvasDataAPIReciverService);

    async GetGraphCanvasCoursesSubmissions(courseId: number): Promise<GraphCanvasCoursesSubmissions> {
      try {
        const courses = await this.canvasDataHandler.GetStudnetCourses();
        const submissions = await this.canvasDataHandler.GetAllGradedSubmissionFromCourse(courseId);
        return new GraphCanvasCoursesSubmissions(submissions, courses);
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
  