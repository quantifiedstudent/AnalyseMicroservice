import ICanvasDataAPIReciverService from "../../domain/interfaces/IAPIReciverServices/ICanvasDataAPIReciverService";
import ICanvasDataHandler from "../../domain/interfaces/IDomainEventHandlers/ICanvasDataHandler";
import Assignment from "../../domain/models/Assignment";
import Course from "../../domain/models/Course";
import Submission from "../../domain/models/Submission";

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
  async GetStudnetCourses(): Promise<Course[]> {
    try {
      const studentCanvasId = await this.GetStudentCanvasIdFromToken();

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
  async GetAssignmentsFromCourse(courseId: number): Promise<Assignment[]> {
    try {
      const studentCanvasId = await this.GetStudentCanvasIdFromToken();

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
  async GetSubmissionFromAssignment(courseId: number, assignmentId: number): Promise<Submission> {
    try {
      const studentCanvasId = await this.GetStudentCanvasIdFromToken();

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
  async GetGradedSubmissionFromAssignment(courseId: number, assignmentId: number): Promise<Submission> {
    try {
      const studentCanvasId = await this.GetStudentCanvasIdFromToken();

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
      const assignments = await this.GetAssignmentsFromCourse(courseId);
      const subbmisions: Submission[] = []

      for (let assignment of assignments)
      {
        subbmisions.push(await this.GetGradedSubmissionFromAssignment(courseId, assignment.id));
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
