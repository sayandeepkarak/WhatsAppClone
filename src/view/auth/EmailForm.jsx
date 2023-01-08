import { useFormik } from "formik";
import React from "react";
import { emailSchema } from "../../schema";
import {
  AuthForm,
  AuthInfoText,
  AuthTextBox,
  FormLabel,
  ThemeButton,
} from "./auth.styled";

const EmailForm = ({ handleOpenLoader, turnOffForm }) => {
  const { values, handleChange, errors, touched, handleSubmit, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: emailSchema,
      onSubmit: (value) => {
        handleOpenLoader({
          open: true,
          text: "Connecting...",
        });
        setTimeout(() => {
          handleOpenLoader({
            open: false,
            text: "",
          });
          turnOffForm({ state: false, email: value.email });
        }, 3000);
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
