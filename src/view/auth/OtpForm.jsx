import React, { useRef, useState } from "react";
import {
  AuthForm,
  AuthInfoText,
  AuthOptionText,
  FormLabel,
  OtpTextBox,
} from "./auth.styled";

const OtpForm = ({ email, restartProcess, openLoader, closeLoader }) => {
  const otp = useRef();
  const [state, setstate] = useState({
    errorText: "Enter 6-digit code",
    resendButton: {
      disable: false,
      text: "didn't receive code?",
    },
    counter: 0,
  });

  const handleChange = () => {
    if (otp.current.value.length < 6) return;
    if (/^([0-9]){6}$/.test(otp.current.value)) {
      setstate({ ...state, errorText: "Enter 6-digit code" });
      openLoader("Verifying otp...");
      setTimeout(() => {
        closeLoader();
        otp.current.value = "";
      }, 3000);
    } else {
      setstate({ ...state, errorText: "Invalid otp" });
    }
  };

  const handleResend = () => {
    let n = 60;
    setstate({
      ...state,
      resendButton: { disable: true, text: "resend otp again in" },
      counter: n,
    });
    openLoader("Resending otp...");
    setTimeout(() => {
      closeLoader();
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
    }, 3000);
  };

  const handleRestart = () => restartProcess({ state: true, email: "" });

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
