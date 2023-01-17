import React, { useRef, useState } from "react";
import axiosInstance from "../../modules/Axios";
import {
  AuthForm,
  AuthInfoText,
  AuthOptionText,
  FormLabel,
  OtpTextBox,
} from "./auth.styled";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const OtpForm = ({ email, chnageForm, openLoader, closeLoader }) => {
  const otp = useRef();
  const navigate = useNavigate();
  const [state, setstate] = useState({
    errorText: "Enter 6-digit code",
    resendButton: {
      disable: false,
      text: "didn't receive code?",
    },
    counter: 0,
  });

  const handleChange = async () => {
    const otpVal = otp.current.value;
    if (otpVal.length < 6) return;
    const validInput = /^([0-9]){6}$/.test(otpVal);
    if (!validInput) {
      return setstate({ ...state, errorText: "Invalid otp" });
    }
    setstate({ ...state, errorText: "Enter 6-digit code" });
    openLoader("Verifying otp...");
    try {
      const res = await axiosInstance.post("/api/verifyOtp", {
        email: email,
        otp: otpVal,
      });
      if (!res.data.isComplete) {
        return chnageForm((old) => ({ ...old, state: "details" }));
      }
      Cookies.set("refresh-key", res.data.refreshToken, { path: "/" });
      navigate("/");
    } catch (error) {
      setstate({ ...state, errorText: error.response.data.error.message });
    } finally {
      closeLoader();
      otp.current.value = "";
    }
  };

  const handleResend = async () => {
    let n = 60;
    setstate({
      ...state,
      resendButton: { disable: true, text: "resend otp again in" },
      counter: n,
    });
    openLoader("Resending otp...");
    try {
      await axiosInstance.post("api/sendOtp", { email });
      const interval = setInterval(() => {
        n--;
        setstate({
          ...state,
          resendButton: { disable: true, text: "resend otp again in" },
          counter: n,
        });
        if (n === 0) {
          setstate({
            ...state,
            resendButton: { disable: false, text: "didn't receive code?" },
          });
          clearInterval(interval);
        }
      }, 1000);
    } catch (error) {
      console.log(error);
    } finally {
      closeLoader();
    }
  };

  const handleRestart = async () => {
    try {
      await axiosInstance.delete("/api/deleteOtp", {
        data: { email },
      });
      chnageForm({ state: "email", email: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AuthForm>
        <FormLabel htmlFor="otp">Verifying your email</FormLabel>
        <AuthInfoText>
          We send a 6 digit verification code to your <br />
          <span id="emailTxt">{email}.</span>
          <span id="wrongTxt" onClick={handleRestart}>
            wrong email?
          </span>
        </AuthInfoText>
        <OtpTextBox id="otp" ref={otp} onInput={handleChange} />
        <AuthInfoText>{state.errorText}</AuthInfoText>
        <AuthOptionText
          disabled={state.resendButton.disable}
          onClick={handleResend}
        >
          {state.resendButton.text + " "}
          {state.counter > 0 && state.counter}
        </AuthOptionText>
      </AuthForm>
    </>
  );
};

export default OtpForm;
