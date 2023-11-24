import Joi from "joi";

const fullNameSchema = Joi.object({
  firstName: Joi.string().required().messages({
    "any.required": "First Name is required",
    "string.base": "First Name must be a string",
  }),
  lastName: Joi.string().required().messages({
    "any.required": "Last Name is required",
    "string.base": "Last Name must be a string",
  }),
});

const addressSchema = Joi.object({
  street: Joi.string().required().messages({
    "any.required": "Street is required",
    "string.base": "Street must be a string",
  }),
  city: Joi.string().required().messages({
    "any.required": "City is required",
    "string.base": "City must be a string",
  }),
  country: Joi.string().required().messages({
    "any.required": "Country is required",
    "string.base": "Country must be a string",
  }),
});

export const orderSchema = Joi.object({
  productName: Joi.string().required().messages({
    "any.required": "ProductName is required",
    "string.base": "ProductName must be a string",
  }),
  price: Joi.number().required().messages({
    "any.required": "Price is required",
    "number.base": "Price must be a number",
  }),
  quantity: Joi.number().required().messages({
    "any.required": "Quantity is required",
    "number.base": "Quantity must be a number",
  }),
});

const joiUser = Joi.object({
  userId: Joi.number().required().messages({
    "any.required": "UserId is required",
    "number.base": "UserId must be a number",
  }),
  username: Joi.string().required().messages({
    "any.required": "Username is required",
    "string.base": "Username must be a string",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required",
    "string.base": "Password must be a string",
  }),
  fullName: fullNameSchema.required().messages({
    "any.required": "FullName is required",
  }),
  age: Joi.number().required().messages({
    "any.required": "Age is required",
    "number.base": "Age must be a number",
  }),
  email: Joi.string().required().email().messages({
    "any.required": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  isActive: Joi.boolean().default(true).messages({
    "boolean.base": "IsActive must be a boolean",
  }),
  hobbies: Joi.array().items(Joi.string()).messages({
    "array.base": "Hobbies must be an array",
  }),
  address: addressSchema.required().messages({
    "any.required": "Address is required",
  }),
  orders: Joi.array().items(orderSchema).messages({
    "array.base": "Orders must be an array",
  }),
});

export default joiUser;
