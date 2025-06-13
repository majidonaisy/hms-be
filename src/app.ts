import { Application } from "express";
import express from "express";
import cors from "cors";
import router from "./routes";

const app : Application = express();


app.use(cors());
app.use(express.json());

app.use("/api/v1", router);

export default app;