import express from "express";
import GraphCanvasOneCourseSubmissionsHandler from "../domainEventsHandlers/GraphCanvasOneCourseSubmissionsHandler";

const router = express.Router();

const graphCanvasOneCourseSubmissionsHandler = new GraphCanvasOneCourseSubmissionsHandler()

router.get('/course/:courseId', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        res.json(await graphCanvasOneCourseSubmissionsHandler.GetGraphCanvasOneCourseSubmissions(Number(req.params.courseId)));
    } catch (err) {
        res.status(500);
        res.json(err);
    }
});

export default router;