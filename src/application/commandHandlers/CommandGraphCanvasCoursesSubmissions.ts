import express from "express";
import GraphCanvasCoursesSubmissionsHandler from "../domainEventsHandlers/GraphCanvasCoursesSubmissionsHandler";

const router = express.Router();

const graphCanvasCoursesSubmissionsHandler = new GraphCanvasCoursesSubmissionsHandler()

router.get('/course/:courseId', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        const start = new Date().getTime();
        res.json(await graphCanvasCoursesSubmissionsHandler.GetGraphCanvasCoursesSubmissions(Number(req.params.courseId)));
        console.log(`${(new Date().getTime() - start)/1000}s GetGraphCanvasCoursesSubmissions`);
    } catch (err) {
        res.status(500);
        res.json(err);
    }
});

export default router;