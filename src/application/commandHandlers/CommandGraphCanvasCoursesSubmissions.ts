import express from "express";
import GraphCanvasCoursesSubmissionsHandler from "../domainEventsHandlers/GraphCanvasCoursesSubmissionsHandler";

const router = express.Router();

const graphCanvasCoursesSubmissionsHandler = new GraphCanvasCoursesSubmissionsHandler()

router.get('/course/:courseId', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        res.json(await graphCanvasCoursesSubmissionsHandler.GetGraphCanvasCoursesSubmissions(Number(req.params.courseId)));
    } catch (err) {
        res.status(500);
        res.json(err);
    }
});

export default router;