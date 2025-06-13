import { Application } from "express";
import express from "express";
import cors from "cors";
import errorMiddleware from "./middleware/errorHandler";
import router from "./routes";


const app : Application = express();


app.use(cors());
app.use(express.json());

app.use("/api/v1", router);


app.get("/", (req, res) => {
  res.json({ message: "Welcome to HMS" });
});

app.use(errorMiddleware);


export default app;