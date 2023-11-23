import { User } from "../users.model";
import { TUser } from "./users.interface";

export const SaveAUserDB = async (data: TUser) => {
  const result = await User.create(data);
  return result;
};

export const GetAllUsersDB = async () => {
  const result = await User.find({});
  return result;
};

export const GetSingleUserDB = async (userId: string) => {
  const filter = { userId };
  const result = await User.findOne(filter);
  return result;
};

export const UpdateSingleUserDB = async (userId: string, udatedData: TUser) => {
  const filter = { userId };
  const result = await User.updateOne(filter, udatedData);
  return result;
};

export const DeleteSingleUesrDB = async (userId: string) => {
  const filter = { userId };
  const result = await User.deleteOne(filter);
  return result;
};
