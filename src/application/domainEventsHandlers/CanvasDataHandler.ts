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
      const start = new Date().getTime();
      if(studentCanvasId === undefined)
        studentCanvasId = await this.GetStudentCanvasIdFromToken();
      console.log(`${(new Date().getTime() - start)/1000}s GetStudentCanvasIdFromToken`);

      const start2 = new Date().getTime();
      const submissionDTO =
        await this.canvasDataAPIReciverService.GetGradedSubmissionFromAssignment(
          courseId,
          assignmentId,
          studentCanvasId
        );
      console.log(`${(new Date().getTime() - start2)/1000}s GetGradedSubmissionFromAssignment`);
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
      const start = new Date().getTime();
      const assignments = await this.GetAssignmentsFromCourse(courseId, studentCanvasId);
      console.log(`${(new Date().getTime() - start)/1000}s GetAssignmentsFromCourse`);

      const subbmisions: Submission[] = []

      const start2 = new Date().getTime();
      for (let assignment of assignments)
      {
        subbmisions.push(await this.GetGradedSubmissionFromAssignment(courseId, assignment.id, studentCanvasId));
      }
      console.log(`${(new Date().getTime() - start2)/1000}s GetGradedSubmissionFromAssignment for all assignments`);
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
