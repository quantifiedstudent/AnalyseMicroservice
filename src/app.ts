import GetPrivateToken from "./GettingToken";
import ManualFetch from "./manualFetching";
import express from "express";

console.log("Hello world");
// EXPRESS CONFIG
const app = express();
// const PORT:number = parseInt(process.env.PORT) || 8080;
const PORT: number = 7000;

// Middleware that parses body to JSON format
app.use(express.json());

const token = GetPrivateToken();

app.get("/", (req, res) => {
  res.status(200).send("welcome to the CamvasDataMicroservice api");
});


// console.log(assignments);

// const manual: ManualFetch = new ManualFetch(token);

// await manual.combineAssignmentSubbmition();

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));


// app.use('/', routerCommandGraphCanvasWeather);
// app.use('/', routerCommandGraphCanvasSubmissions);
// app.use('/', routerCommandCustomGraph);
