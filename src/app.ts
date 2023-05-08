import GetPrivateToken from "./GettingToken";
import { CanvasDataHandler } from "./application/domainEventsHandlers/CanvasDataHandler";
import CanvasDataAPIReciverService from "./infrastructure/recivers/CanvasDataAPIReciverService";
import ManualFetch from "./manualFetching";
import express from "express";

console.log("Hello world");
// EXPRESS CONFIG
const app = express();
// const PORT:number = parseInt(process.env.PORT) || 8080;
const PORT: number = 7003;

// Middleware that parses body to JSON format
app.use(express.json());

const token = GetPrivateToken();

app.get("/", async (req, res) => {
  const reciver = new CanvasDataAPIReciverService();
  const handler = new CanvasDataHandler(reciver);
  const courses = await handler.GetCourseAssignments(12886)
  res.status(200).send(courses);
});


// console.log(assignments);

// const manual: ManualFetch = new ManualFetch(token);

// await manual.combineAssignmentSubbmition();

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


// app.use('/', routerCommandGraphCanvasWeather);
// app.use('/', routerCommandGraphCanvasSubmissions);
// app.use('/', routerCommandCustomGraph);
