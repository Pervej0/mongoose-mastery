import { Request, Response } from "express";
import {
  DeleteSingleUesrDB,
  GetAllUsersDB,
  GetSingleUserDB,
  SaveAUserDB,
  UpdateSingleUserDB,
} from "./users.service";
import joiUser from "./users.joi.validation";

export const SaveAUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body.user;
    const validData = await joiUser.validateAsync(userData);
    const query = await SaveAUserDB(validData);

    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: query,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something is wrong!",
      error: error,
    });
  }
};

export const GetAllUsers = async (req: Request, res: Response) => {
  try {
    const query = await GetAllUsersDB();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: query,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error,
    });
  }
};

export const GetSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const query = await GetSingleUserDB(userId);
    res.status(200).json({
      success: true,
      message: "User fetched successfully!",
      data: query,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error,
    });
  }
};

export const UpdateSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const updatedData = req.body.user;
    const validUpdateData = await joiUser.validateAsync(updatedData);
    const query = await UpdateSingleUserDB(userId, validUpdateData);
    console.log("controler");
    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: updatedData,
      result: query,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error,
    });
  }
};

export const DeleteSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const query = await DeleteSingleUesrDB(userId);

    if (query.deletedCount === 0) {
      res.json({
        message: "User dose not exist!",
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: query,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      error: error,
    });
  }
};
