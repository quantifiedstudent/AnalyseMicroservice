import fetch from "node-fetch";
import ICanvasDataAPIReciverService from "../../domain/interfaces/IAPIReciverServices/ICanvasDataAPIReciverService";
import CourseDTO from "../dto/CourseDTO";
import AssignmentDTO from "../dto/AssignmentDTO";
import SubmissionDTO from "../dto/SubmissionDTO";

export default class CanvasDataAPIReciverService
  implements ICanvasDataAPIReciverService
{
  url: string = "http://localhost:7001";

  async GetStudentCanvasIdFromToken(): Promise<number> {
    const apiRoute = `/student/self`;
    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(this.url + apiRoute, options);
      const data = await response.json();
      return <number>data;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      // we'll proceed, but let's report it
      console.error(message);
      return Promise.reject(error);
    }
  }

  async GetStudnetCourses(studentCanvasId: number): Promise<CourseDTO[]> {
    const apiRoute = (studentCanvasId: number) =>
      `/course/student/${studentCanvasId.toString()}`;

    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(
        this.url + apiRoute(studentCanvasId),
        options
      );
      const data = await response.json();
      const coursesDTO: CourseDTO[] = [];
      for (let courseDTO of <CourseDTO[]>data) {
        coursesDTO.push(<CourseDTO>courseDTO);
      }
      return coursesDTO;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      // we'll proceed, but let's report it
      console.error(message);
      return Promise.reject(error);
    }
  }

  async GetCourseAssignments(
    courseId: number,
    studentCanvasId: number
  ): Promise<AssignmentDTO[]> {
    const apiRoute = (courseId: number, studentCanvasId: number) =>
      `/assignment/course/${courseId.toString()}/student/${studentCanvasId.toString()}`;

    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(
        this.url + apiRoute(courseId, studentCanvasId),
        options
      );
      const data = await response.json();
      const assignmentsDTO: AssignmentDTO[] = [];
      for (let assignmentDTO of <AssignmentDTO[]>data) {
        assignmentsDTO.push(<AssignmentDTO>assignmentDTO);
      }
      return assignmentsDTO;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      // we'll proceed, but let's report it
      console.error(message);
      return Promise.reject(error);
    }
  }
  async GetAssignmentSubmission(assignmentId: number, courseId: number, studentCanvasId: number): Promise<SubmissionDTO> {
    const apiRoute = (courseId: number, studentCanvasId: number) =>
      `/subbmision/course/${courseId.toString()}/student/${studentCanvasId.toString()}/assigment/${assignmentId.toString()}`;

    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(
        this.url + apiRoute(courseId, studentCanvasId),
        options
      );
      const submissionDTO = await response.json();
      return <SubmissionDTO>submissionDTO;
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      // we'll proceed, but let's report it
      console.error(message);
      return Promise.reject(error);
    }
  }
}
