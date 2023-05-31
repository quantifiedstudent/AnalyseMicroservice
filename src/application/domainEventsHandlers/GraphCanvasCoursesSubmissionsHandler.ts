import CanvasDataAPIReciverService from "../../infrastructure/recivers/CanvasDataAPIReciverService";
import CanvasDataHandler from "./CanvasDataHandler";
import GraphCanvasCoursesSubmissions from "../../domain/models/GraphCanvasCoursesSubmissions";
import IGraphCanvasCoursesSubmissions from "../../domain/interfaces/IDomainEventHandlers/IGraphCanvasCoursesSubmissionsHandler";

export default class GraphCanvasCoursesSubmissionsHandler implements IGraphCanvasCoursesSubmissions {
    
    canvasDataAPIReciverService = new CanvasDataAPIReciverService();
    canvasDataHandler = new CanvasDataHandler(this.canvasDataAPIReciverService);

    async GetGraphCanvasCoursesSubmissions(courseId: number): Promise<GraphCanvasCoursesSubmissions> {
      try {
        const start = new Date().getTime();
        const courses = await this.canvasDataHandler.GetStudnetCourses();
        console.log(`${(new Date().getTime() - start)/1000}s GetStudnetCourses`);
        const start2 = new Date().getTime();
        const submissions = await this.canvasDataHandler.GetAllGradedSubmissionFromCourse(courseId);
        console.log(`${(new Date().getTime() - start2)/1000}s GetAllGradedSubmissionFromCourse`);
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
  