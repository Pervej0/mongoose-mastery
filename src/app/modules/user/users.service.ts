import { User } from "../users.model";
import { TOrder, TUser } from "./users.interface";

export const SaveAUserDB = async (data: TUser) => {
  const result = await User.create(data);
  return result;
};

export const GetAllUsersDB = async () => {
  const result = await User.find(
    {},
    {
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      address: 1,
    }
  );
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

// orders business logic
export const UpdateOrdersDB = async (userId: string, order: TOrder) => {
  const filter = { userId };
  const result = await User.updateOne(filter, { $push: { orders: order } });
  return result;
};

export const GetAllOrdersDB = async (userId: string) => {
  const result = await User.findOne({ userId }, { orders: 1 });
  return result;
};

export const GetTotalOrderPriceDB = async (userId: string) => {
  const result = await User.aggregate([{ $match: { userId } }]);
  return result;
};
