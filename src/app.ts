import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

// parser
app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To The Backend");
});

export default app;
