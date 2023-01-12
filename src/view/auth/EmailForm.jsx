import React from "react";
import { useFormik } from "formik";
import { emailSchema } from "../../schema";
import {
  AuthForm,
  AuthInfoText,
  AuthTextBox,
  FormLabel,
  ThemeButton,
} from "./auth.styled";
import axiosInstance from "../../modules/Axios";

const EmailForm = ({ handleOpenLoader, chnageForm }) => {
  const { values, handleChange, errors, touched, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: emailSchema,
      onSubmit: async (value) => {
        handleOpenLoader({
          open: true,
          text: "Connecting...",
        });
        axiosInstance
          .post("api/sendOtp", {
            email: value.email,
          })
          .then((res) => {
            chnageForm({ state: "otp", email: value.email });
          })
          .catch((error) => {
            console.log(error.response.data.error.message);
          })
          .finally(() => {
            handleOpenLoader({
              open: false,
              text: "",
            });
          });
      },
    });
  return (
    <>
      <AuthForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="email">Enter your email</FormLabel>
        <AuthTextBox
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <AuthInfoText>{errors.email}</AuthInfoText>
        )}
        <ThemeButton type="submit">Next</ThemeButton>
      </AuthForm>
    </>
  );
};

export default EmailForm;
