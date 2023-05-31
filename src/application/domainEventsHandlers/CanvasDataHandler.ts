import ICanvasDataAPIReciverService from "../../domain/interfaces/IAPIReciverServices/ICanvasDataAPIReciverService";
import ICanvasDataHandler from "../../domain/interfaces/IDomainEventHandlers/ICanvasDataHandler";
import Assignment from "../../domain/models/Assignment";
import Course from "../../domain/models/Course";
import Submission from "../../domain/models/Submission";
import SubmissionDTO from "../../infrastructure/dto/SubmissionDTO";

export default class CanvasDataHandler implements ICanvasDataHandler {
  canvasDataAPIReciverService: ICanvasDataAPIReciverService;

  constructor(canvasDataAPIReciverService: ICanvasDataAPIReciverService) {
    this.canvasDataAPIReciverService = canvasDataAPIReciverService;
  }
  async GetStudentCanvasIdFromToken(): Promise<number> {
    try {
      return await this.canvasDataAPIReciverService.GetStudentCanvasIdFromToken();
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
  async GetStudnetCourses(studentCanvasId?: number): Promise<Course[]> {
    try {
      if(studentCanvasId === undefined)
        studentCanvasId = await this.GetStudentCanvasIdFromToken();

      const coursesDTO =
        await this.canvasDataAPIReciverService.GetStudnetCourses(
          studentCanvasId
        );
      const courses: Course[] = [];
      for (let courseDTO of coursesDTO) {
        courses.push(new Course(courseDTO));
      }
      return courses;
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
  async GetAssignmentsFromCourse(courseId: number, studentCanvasId?: number): Promise<Assignment[]> {
    try {
      if(studentCanvasId === undefined)
        studentCanvasId = await this.GetStudentCanvasIdFromToken();

      const assignmentsDTO =
        await this.canvasDataAPIReciverService.GetAssignmentsFromCourse(
          courseId,
          studentCanvasId
        );
      const assignments: Assignment[] = [];
      for (let assignmentDTO of assignmentsDTO) {
        assignments.push(new Assignment(assignmentDTO));
      }
      return assignments;
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
  async GetSubmissionFromAssignment(courseId: number, assignmentId: number, studentCanvasId?: number): Promise<Submission> {
    try {
      if(studentCanvasId === undefined)
        studentCanvasId = await this.GetStudentCanvasIdFromToken();

      const submissionDTO =
        await this.canvasDataAPIReciverService.GetSubmissionFromAssignment(
          courseId,
          assignmentId,
          studentCanvasId
        );
      const submission = new Submission(submissionDTO);
      return submission;
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
  async GetGradedSubmissionFromAssignment(courseId: number, assignmentId: number, studentCanvasId?: number): Promise<Submission> {
    try {
      if(studentCanvasId === undefined)
        studentCanvasId = await this.GetStudentCanvasIdFromToken();

      const submissionDTO =
        await this.canvasDataAPIReciverService.GetGradedSubmissionFromAssignment(
          courseId,
          assignmentId,
          studentCanvasId
        );
      const submission = new Submission(submissionDTO);
      return submission;
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
  async GetAllGradedSubmissionFromCourse(courseId: number): Promise<Submission[]> {
    try {
      const studentCanvasId = await this.GetStudentCanvasIdFromToken();

      const subbmisionsDTO: SubmissionDTO[] = await this.canvasDataAPIReciverService.GetAllGradedSubmissionFromCourse(courseId, studentCanvasId);
      const subbmisions: Submission[] = [];

      for (let subbmisionDTO of subbmisionsDTO)
      {
        subbmisions.push(new Submission(subbmisionDTO));
      }
      return subbmisions;
      
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
