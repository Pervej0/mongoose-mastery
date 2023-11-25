import express, { Router } from "express";
import {
  DeleteSingleUser,
  GetAllOrders,
  GetAllUsers,
  GetSingleUser,
  GetTotalOrderPrice,
  SaveAUser,
  UpdateOrders,
  UpdateSingleUser,
} from "./users.controller";
const router = express.Router();

// user routes
router.post("/", SaveAUser);
router.get("/", GetAllUsers);
router.get("/:userId", GetSingleUser);
router.put("/:userId", UpdateSingleUser);
router.delete("/:userId", DeleteSingleUser);

// order routes
router.put("/:userId/orders", UpdateOrders);
router.get("/:userId/orders", GetAllOrders);
router.get("/:userId/orders/total-price", GetTotalOrderPrice);

export const usersRoute: Router = router;
