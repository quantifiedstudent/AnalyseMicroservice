import GraphCanvasCoursesSubmissions from "../../models/GraphCanvasCoursesSubmissions";

export default interface IGraphCanvasCoursesSubmissions{
    GetGraphCanvasCoursesSubmissions(courseId: number): Promise<GraphCanvasCoursesSubmissions>;
}