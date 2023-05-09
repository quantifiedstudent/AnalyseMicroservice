import express from "express";
import GraphCanvasWeatherHandler from "../domainEventsHandlers/GraphCanvasWeatherHandler";

const router = express.Router();

const graphCanvasWeatherHandler = new GraphCanvasWeatherHandler()

router.get('/course/:courseId', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        const startDate = new Date(<string>req.query.startDate);
        const endDate = new Date(<string>req.query.endDate);

        res.json(await graphCanvasWeatherHandler.GetGraphCanvasWeatherData(Number(req.params.courseId), startDate, endDate));
    } catch (err) {
        res.status(500);
        res.json(err);
    }
});

export default router;