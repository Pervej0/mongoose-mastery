import { Schema, model } from "mongoose";
import { TUser, TFullName, TAddress } from "./user/user.interface";

const fullNameSchema = new Schema<TFullName>({
  firstName: { type: String, required: [true, "firstName is required"] },
  lastName: { type: String, required: [true, "lastName is required"] },
});

const addressSchema = new Schema<TAddress>({
  street: { type: String, required: [true, "street is required"] },
  city: { type: String, required: [true, "city is required"] },
  country: { type: String, required: [true, "firstName is required"] },
});

const userSchema = new Schema<TUser>({
  userId: { type: String, required: [true, "userId is required"] },
  userName: { type: String, required: [true, "userName is required"] },
  password: { type: String, required: [true, "password is required"] },
  fullName: { type: fullNameSchema, required: [true, "fullName is required"] },
  age: { type: Number, required: [true, "number is required"] },
  email: { type: String, required: [true, "email is required"] },
  isActive: { type: Boolean, default: true },
  hobbies: { type: [String] },
  address: { type: addressSchema, required: [true, "address is required"] },
});

export const User = model<TUser>("User", userSchema);
