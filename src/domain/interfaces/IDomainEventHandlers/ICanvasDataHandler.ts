import Assignment from "../../models/Assignment";
import Course from "../../models/Course";
import Submission from "../../models/Submission";

export default interface ICanvasDataHandler{
    GetStudentCanvasIdFromToken(): Promise<number>;
    GetStudnetCourses(): Promise<Course[]>;
    GetAssignmentsFromCourse(courseId: number): Promise<Assignment[]>
    GetSubmissionFromAssignment(courseId: number, assignmentId: number): Promise<Submission>;
    GetGradedSubmissionFromAssignment(courseId: number, assignmentId: number): Promise<Submission>;
    GetAllGradedSubmissionFromCourse(courseId: number): Promise<Submission[]>;
}