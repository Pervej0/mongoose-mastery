import { User } from "../users.model";
import { TUser } from "./users.interface";

export const SaveAUserDB = async (data: TUser) => {
  console.log("service");
  const result = await User.create(data);
  return result;
};
