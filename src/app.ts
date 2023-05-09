import express from "express";
import GetPrivateToken from "./GettingToken";
import routerCommandGraphCanvasWeather from "./application/commandHandlers/CommandGraphCanvasWeather"

import CanvasDataHandler from "./application/domainEventsHandlers/CanvasDataHandler";
import WeatherDataHandler from "./application/domainEventsHandlers/WeatherDataHandler";
import CanvasDataAPIReciverService from "./infrastructure/recivers/CanvasDataAPIReciverService";
import WeatherDataAPIReciverService from "./infrastructure/recivers/WeatherDataAPIReciverService";

console.log("Hello world");
// EXPRESS CONFIG
const app = express();
// const PORT:number = parseInt(process.env.PORT) || 8080;
const PORT: number = 7003;

// Middleware that parses body to JSON format
app.use(express.json());

const token = GetPrivateToken();

app.get("/", async (req, res) => {
  // const reciver = new WeatherDataAPIReciverService();
  // const handler = new WeatherDataHandler(reciver);
  // const courses = await handler.GetDailyWeather(new Date("2023-03-01"), new Date("2023-03-03"))
  const reciver = new CanvasDataAPIReciverService();
  const handler = new CanvasDataHandler(reciver);
  const courses = await handler.GetGradedSubmissionFromAssignment(13086, 222334)
  res.status(200).send(courses);
});


// console.log(assignments);

// const manual: ManualFetch = new ManualFetch(token);

// await manual.combineAssignmentSubbmition();

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

// Full route /graphCanvasWeather/course/:courseId/assignment/:assignmentId
app.use('/graphCanvasWeather', routerCommandGraphCanvasWeather);
// app.use('/', routerCommandGraphCanvasSubmissions);
// app.use('/', routerCommandCustomGraph);
