import express, { Request, Response } from "express";
import cors from "cors";
import { usersRoute } from "./app/modules/user/users.route";
const app = express();

// parser
app.use(express.json());
app.use(cors());

// routers
app.use("/api/users", usersRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To The Backend");
});

export default app;
