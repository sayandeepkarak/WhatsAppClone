import React from "react";
import {
  AuthForm,
  AuthInfoText,
  AuthTextBox,
  FormLabel,
  ImageUpload,
  ThemeButton,
} from "./auth.styled";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useFormik } from "formik";
import { userDetailsSchema } from "../../schema";

const Details = () => {
  const { values, handleChange, errors, touched, handleSubmit, handleBlur } =
    useFormik({
      initialValues: { profile: "", fullName: "" },
      validationSchema: userDetailsSchema,
      onSubmit: (value) => {
        console.log(value);
      },
    });

  return (
    <>
      <AuthForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="fullName">Profile info</FormLabel>
        <ImageUpload>
          <label htmlFor="profile">
            <AddAPhotoIcon />
          </label>
        </ImageUpload>
        <input
          type="file"
          name="profile"
          id="profile"
          value={values.profile}
          onChange={handleChange}
          onBlur={handleBlur}
          accept=".jpg,.jpeg,.png"
        />
        {errors.profile && touched.profile && (
          <AuthInfoText>{errors.profile}</AuthInfoText>
        )}
        <AuthTextBox
          name="fullName"
          placeholder="Type your name here"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{ textAlign: "left" }}
        />
        {errors.fullName && touched.fullName && (
          <AuthInfoText>{errors.fullName}</AuthInfoText>
        )}
        <ThemeButton type="submit">Next</ThemeButton>
      </AuthForm>
    </>
  );
};

export default Details;
