import express from "express";
import routerCommandGraphCanvasWeather from "./application/commandHandlers/CommandGraphCanvasWeather"
import routerCommandGraphCanvasCoursesSubmissions from "./application/commandHandlers/CommandGraphCanvasCoursesSubmissions"
import CanvasDataHandler from "./application/domainEventsHandlers/CanvasDataHandler";
import CanvasDataAPIReciverService from "./infrastructure/recivers/CanvasDataAPIReciverService";

console.log("Hello world");
// EXPRESS CONFIG
const app = express();
// const PORT:number = parseInt(process.env.PORT) || 8080;
const PORT: number = 7003;

// Middleware that parses body to JSON format
app.use(express.json());

app.get("/", async (req, res) => {
  // const reciver = new WeatherDataAPIReciverService();
  // const handler = new WeatherDataHandler(reciver);
  // const courses = await handler.GetDailyWeather(new Date("2023-03-01"), new Date("2023-03-03"))
  const reciver = new CanvasDataAPIReciverService();
  const handler = new CanvasDataHandler(reciver);
  const courses = await handler.GetGradedSubmissionFromAssignment(13086, 222334)
  res.status(200).send(courses);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

// Full route /graphCanvasWeather/course/:courseId?startDate={startDate}&endDate={endDate}
app.use('/graphCanvasWeather', routerCommandGraphCanvasWeather);
// Full route /graphCanvasCoursesSubmissions/course/:courseId
app.use('/graphCanvasCoursesSubmissions', routerCommandGraphCanvasCoursesSubmissions);
// 
// app.use('/', routerCommandCustomGraph);
