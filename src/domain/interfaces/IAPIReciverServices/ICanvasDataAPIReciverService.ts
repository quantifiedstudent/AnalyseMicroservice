import AssignmentDTO from "../../../infrastructure/dto/AssignmentDTO";
import CourseDTO from "../../../infrastructure/dto/CourseDTO";
import SubmissionDTO from "../../../infrastructure/dto/SubmissionDTO";

export default interface ICanvasDataAPIReciverService{
    GetStudentCanvasIdFromToken(): Promise<number>;
    GetStudnetCourses(studentCanvasId: number): Promise<CourseDTO[]>;
    GetCourseAssignments(courseId: number, studentCanvasId: number): Promise<AssignmentDTO[]>;
    GetAssignmentSubmission(assignmentId: number, courseId: number, studentCanvasId: number): Promise<SubmissionDTO>;
}