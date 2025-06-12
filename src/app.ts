import { Application } from "express";
import express from "express";
import cors from "cors";


const app : Application = express();

app.use(cors());
app.use(express.json());


