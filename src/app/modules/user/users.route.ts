import express, { Router } from "express";
import {
  DeleteSingleUser,
  GetAllUsers,
  GetSingleUser,
  SaveAUser,
  UpdateSingleUser,
} from "./users.controller";
const router = express.Router();

console.log("route");
router.post("/", SaveAUser);
router.get("/", GetAllUsers);
router.get("/:userId", GetSingleUser);
router.put("/:userId", UpdateSingleUser);
router.delete("/:userId", DeleteSingleUser);

export const usersRoute: Router = router;
