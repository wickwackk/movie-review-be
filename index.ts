import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import movie_router from "./routes/movie-api";
import db from "./config/mongoose-config";

dotenv.config();

const app: Express = express();
const port: number = 2080;

app.use(express.json());
app.use(cors());

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(movie_router);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Express + Typescript Server");
// });

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
