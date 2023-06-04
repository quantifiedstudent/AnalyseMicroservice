import express from "express";
import GraphSubmissionsWithWeatherHandler from "../domainEventsHandlers/GraphSubmissionsWithWeatherHandler";

const router = express.Router();

const graphSubmissionsWithWeatherHandler = new GraphSubmissionsWithWeatherHandler()

router.get('/course/:courseId', async function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        const startDate = new Date(<string>req.query.startDate);
        const endDate = new Date(<string>req.query.endDate);

        res.json(await graphSubmissionsWithWeatherHandler.GetGraphSubbmisonsAndWeatherData(Number(req.params.courseId), startDate, endDate));
    } catch (err) {
        res.status(500);
        res.json(err);
    }
});

export default router;