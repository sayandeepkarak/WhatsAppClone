import * as yup from "yup";

export const emailSchema = yup.object({
  email: yup
    .string()
    .email("Please provide a valid email")
    .required("Please enter your email"),
});

export const userDetailsSchema = yup.object({
  fullName: yup.string().min(3).max(20).required("Please enter your name"),
});
