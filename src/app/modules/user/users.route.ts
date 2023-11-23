import express, { Router } from "express";
import { SaveAUser } from "./users.controller";
const router = express.Router();

console.log("route");
router.post("/", SaveAUser);

export const usersRoute: Router = router;
