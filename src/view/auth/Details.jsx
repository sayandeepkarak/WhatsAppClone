import React, { useRef } from "react";
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
import ImagePreview from "./ImagePreview";
import axiosInstance from "../../modules/Axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Details = ({ email, openLoader, closeLoader }) => {
  const navigate = useNavigate();
  const imageRef = useRef();
  const {
    values,
    handleChange,
    setFieldValue,
    errors,
    touched,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: { profile: null, fullName: "" },
    validationSchema: userDetailsSchema,
    onSubmit: async (value) => {
      openLoader("Loading...");
      try {
        const res = await axiosInstance.post(
          "api/uploadDetails",
          { ...value, email },
          {
            headers: {
              "Content-type": "multipart/form-data",
            },
          }
        );
        const date = new Date();
        date.setMinutes(date.getMinutes() + 1);
        Cookies.set("refresh-key", res.data.refreshToken, {
          path: "/",
          expires: 90,
        });
        Cookies.set("access-key", res.data.accessToken, {
          path: "/",
          expires: date,
        });
        navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        closeLoader();
      }
    },
  });

  const setImage = () => setFieldValue("profile", imageRef.current.files[0]);

  return (
    <>
      <AuthForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="fullName">Profile info</FormLabel>
        <ImageUpload>
          <label htmlFor="profile">
            {!values.profile ? (
              <AddAPhotoIcon />
            ) : (
              <ImagePreview imgFile={imageRef} />
            )}
          </label>
        </ImageUpload>
        <input
          type="file"
          id="profile"
          ref={imageRef}
          onChange={setImage}
          onBlur={handleBlur}
          accept=".jpg,.png,.jpeg"
          hidden
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
