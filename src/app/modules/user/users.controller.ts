import { Request, Response } from "express";
import { SaveAUserDB } from "./users.service";

export const SaveAUser = async (req: Request, res: Response) => {
  try {
    console.log("controller");
    const userData = req.body.user;
    const query = await SaveAUserDB(userData);
    // delete query.password;
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
