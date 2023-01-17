import * as yup from "yup";

export const emailSchema = yup.object({
  email: yup
    .string()
    .email("Please provide a valid email")
    .required("Please enter your email"),
});

export const userDetailsSchema = yup.object().shape({
  profile: yup
    .mixed()
    .required("required")
    .test(
      "fileSize",
      "Image must less than 2 mb",
      (value) => value && value.size <= 1024 * 1024 * 2
    )
    .test("fileType", "File must be picture", (value) =>
      ["image/png", "image/jpg", "image/jpeg"].includes(value.type)
    ),
  fullName: yup.string().min(3).max(20).required("Please enter your name"),
});
