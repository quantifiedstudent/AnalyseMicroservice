import CanvasDataAPIReciverService from "../../infrastructure/recivers/CanvasDataAPIReciverService";
import CanvasDataHandler from "./CanvasDataHandler";
import GraphCanvasOneCourseSubmissions from "../../domain/models/GraphCanvasOneCourseSubmissions";
import ICanvasDataAPIReciverService from "../../domain/interfaces/IAPIReciverServices/ICanvasDataAPIReciverService";
import ICanvasDataHandler from "../../domain/interfaces/IDomainEventHandlers/ICanvasDataHandler";

export default class GraphCanvasOneCourseSubmissionsHandler {
    
    canvasDataAPIReciverService: ICanvasDataAPIReciverService = new CanvasDataAPIReciverService();
    canvasDataHandler: CanvasDataHandler = new CanvasDataHandler(this.canvasDataAPIReciverService);

    async GetGraphCanvasOneCourseSubmissions(courseId: number): Promise<GraphCanvasOneCourseSubmissions> {
      try {
        const submissions = await this.canvasDataHandler.GetAllGradedSubmissionFromOneCourse(courseId);
        return new GraphCanvasOneCourseSubmissions(submissions, courseId);
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
  