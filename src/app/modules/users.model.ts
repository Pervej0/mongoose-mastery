import { Schema, model } from "mongoose";
import { TUser, TFullName, TAddress, TOrder } from "./user/users.interface";
import bcrypt from "bcrypt";
import config from "../config/config";

const fullNameSchema = new Schema<TFullName>({
  firstName: { type: String, required: [true, "firstName is required"] },
  lastName: { type: String, required: [true, "lastName is required"] },
});

const addressSchema = new Schema<TAddress>({
  street: { type: String, required: [true, "street is required"] },
  city: { type: String, required: [true, "city is required"] },
  country: { type: String, required: [true, "firstName is required"] },
});

const orderSchema = new Schema<TOrder>({
  productName: { type: String, required: [true, "ProductName is required"] },
  price: { type: Number, required: [true, "Price is required"] },
  quantity: { type: Number, required: [true, "Quantity is required"] },
});

const userSchema = new Schema<TUser>({
  userId: {
    type: Number,
    required: [true, "userId is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  fullName: {
    type: fullNameSchema,
    required: [true, "fullName is required"],
  },
  age: { type: Number, required: [true, "number is required"] },
  email: { type: String, required: [true, "email is required"] },
  isActive: { type: Boolean, default: true },
  hobbies: { type: [String] },
  address: { type: addressSchema, required: [true, "address is required"] },
  orders: { type: [orderSchema] },
});

// mongoose middleware/hooks
userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_saltRounds)
  );
  next();
});

userSchema.pre("updateOne", async function (next) {
  const user = this.getUpdate() as TUser;
  if (user.username) {
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_saltRounds)
    );
    next();
  }
});

userSchema.set("toJSON", {
  transform: function (doc, ret) {
    delete ret["password"];
    return ret;
  },
});

export const User = model<TUser>("User", userSchema);
