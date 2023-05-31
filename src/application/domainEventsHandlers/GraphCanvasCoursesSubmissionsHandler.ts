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
        const submissions = await this.canvasDataHandler.GetAllGradedSubmissionFromCourse(courseId);
        return new GraphCanvasCoursesSubmissions(submissions, []);
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
  