import Assignment from "../../models/Assignment";
import Course from "../../models/Course";
import Submission from "../../models/Submission";

export default interface ICanvasDataHandler{
    GetStudentCanvasIdFromToken(): Promise<number>;
    GetStudnetCourses(): Promise<Course[]>;
    GetCourseAssignments(courseId: number): Promise<Assignment[]>
    GetAssignmentSubmission(assignmentId: number, courseId: number): Promise<Submission>;
}