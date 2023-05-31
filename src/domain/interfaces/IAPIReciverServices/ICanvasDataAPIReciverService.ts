import AssignmentDTO from "../../../infrastructure/dto/AssignmentDTO";
import CourseDTO from "../../../infrastructure/dto/CourseDTO";
import SubmissionDTO from "../../../infrastructure/dto/SubmissionDTO";

export default interface ICanvasDataAPIReciverService{
    GetStudentCanvasIdFromToken(): Promise<number>;
    GetStudnetCourses(studentCanvasId: number): Promise<CourseDTO[]>;
    GetAssignmentsFromCourse(courseId: number, studentCanvasId: number): Promise<AssignmentDTO[]>;
    GetSubmissionFromAssignment(courseId: number, assignmentId: number, studentCanvasId: number): Promise<SubmissionDTO>;
    GetGradedSubmissionFromAssignment(courseId: number, assignmentId: number, studentCanvasId: number): Promise<SubmissionDTO>;
    GetAllGradedSubmissionFromCourse(courseId: number, studentCanvasId: number): Promise<SubmissionDTO[]>;
}