import CanvasDataAPIReciverService from "../../infrastructure/recivers/CanvasDataAPIReciverService";
import CanvasDataHandler from "./CanvasDataHandler";
import GraphCanvasCoursesSubmissions from "../../domain/models/GraphCanvasCoursesSubmissions";
import IGraphCanvasCoursesSubmissions from "../../domain/interfaces/IDomainEventHandlers/IGraphCanvasCoursesSubmissionsHandler";
import ICanvasDataAPIReciverService from "../../domain/interfaces/IAPIReciverServices/ICanvasDataAPIReciverService";
import ICanvasDataHandler from "../../domain/interfaces/IDomainEventHandlers/ICanvasDataHandler";

export default class GraphCanvasCoursesSubmissionsHandler implements IGraphCanvasCoursesSubmissions {
    
    canvasDataAPIReciverService: ICanvasDataAPIReciverService = new CanvasDataAPIReciverService();
    canvasDataHandler: ICanvasDataHandler = new CanvasDataHandler(this.canvasDataAPIReciverService);

    async GetGraphCanvasCoursesSubmissions(courseId: number): Promise<GraphCanvasCoursesSubmissions> {
      try {
        const start = new Date().getTime();
        const courses = await this.canvasDataHandler.GetStudnetCourses();
        console.log(`${(new Date().getTime() - start)/1000}s GetStudnetCourses`);
        // // OLD
        // const start2 = new Date().getTime();
        // const submissions = await this.canvasDataHandler.GetAllGradedSubmissionFromCourse(courseId);
        // console.log(`${(new Date().getTime() - start2)/1000}s GetAllGradedSubmissionFromCourse`);

        const start3 = new Date().getTime();
        const submissions = await this.canvasDataHandler.GetAllGradedSubmissionFromCourse(courseId);
        console.log(`${(new Date().getTime() - start3)/1000}s GetAllGradedSubmissionFromCourse2`);
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
  