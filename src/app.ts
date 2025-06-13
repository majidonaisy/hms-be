import { Application } from "express";
import express from "express";
import cors from "cors";
import { errorHandler } from "./middleware/errorHandler";
import authRouter from "./features/auth/auth.routes";

const app : Application = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRouter);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to HMS" });
});


const PORT = process.env.PORT || 5000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use(errorHandler);

export default app;