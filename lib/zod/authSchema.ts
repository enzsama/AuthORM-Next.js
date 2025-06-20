import { object, string } from "zod";

const getPasswordSchema = () =>
  string({ required_error: "Password is required " })
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must not exceed 32 characters");

const getConfirmPasswordSchema = () =>
  string({ required_error: "This field is required" })
    .min(8, "Must contain at least 8 characters")
    .max(32, "Must not exceed 32 characters");

const getEmailSchema = () =>
  string({ required_error: "Email is required" })
    .email()
    .min(6, "A valid email is required")
    .email("Invalid email");

const getNameSchema = () =>
  string({ required_error: "Name is required" })
    .min(1, "Name is required")
    .max(20, "Name must be less than 20 characters");

export const signupSchema = object({
  name: getNameSchema(),
  email: getEmailSchema(),
  password: getPasswordSchema(),
  confirmPassword: getConfirmPasswordSchema(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export const loginSchema = object({
  email: getEmailSchema(),
  password: getPasswordSchema(),
});

export const forgotPasswordSchema = object({
  email: getEmailSchema(),
});

export const resetPasswordSchema = object({
  password: getPasswordSchema(),
  confirmPassword: getConfirmPasswordSchema(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
