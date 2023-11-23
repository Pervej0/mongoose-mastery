import Joi from "joi";

// Joi schema for TFullName
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

// Joi schema for TAddress
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

// Joi schema for TUser
const joiUser = Joi.object({
  userId: Joi.string().required().messages({
    "any.required": "User ID is required",
    "string.base": "User ID must be a string",
  }),
  userName: Joi.string().required().messages({
    "any.required": "User Name is required",
    "string.base": "User Name must be a string",
  }),
  password: Joi.string().required().messages({
    "any.required": "Password is required",
    "string.base": "Password must be a string",
  }),
  fullName: fullNameSchema.required().messages({
    "any.required": "Full Name is required",
  }),
  age: Joi.number().required().messages({
    "any.required": "Age is required",
    "number.base": "Age must be a number",
  }),
  email: Joi.string().required().email().messages({
    "any.required": "Email is required",
    "string.email": "Invalid email format",
  }),
  isActive: Joi.boolean().default(true),
  hobbies: Joi.array().items(Joi.string()),
  address: addressSchema.required().messages({
    "any.required": "Address is required",
  }),
});

// // Example usage
// const JoiUser = {
//   userId: "123",
//   userName: "john_doe",
//   password: "password123",
//   fullName: { firstName: "John", lastName: "Doe" },
//   age: 25,
//   email: "john.doe@example.com",
//   isActive: true,
//   hobbies: ["reading", "coding"],
//   address: { street: "123 Main St", city: "Cityville", country: "Countryland" },
// };

export default joiUser;
