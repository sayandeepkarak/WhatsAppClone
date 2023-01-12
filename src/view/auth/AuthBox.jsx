import React, { useState } from "react";
import LoadModal from "../../components/LoadModal";
import { AuthBoxArea, AuthBoxBlock, HeadText } from "./auth.styled";
import Details from "./Details";
import EmailForm from "./EmailForm";
import OtpForm from "./OtpForm";

const AuthBox = () => {
  const [formState, setFormState] = useState({
    state: "email",
    email: "",
  });
  const [loader, setLoader] = useState({
    open: false,
    text: "",
  });

  const handleOpenLoader = (text) => setLoader({ open: true, text });
  const handleCloseLoader = () => setLoader({ open: false, text: "" });

  return (
    <>
      <AuthBoxBlock>
        <AuthBoxArea>
          <HeadText>welcome to whatsappclone</HeadText>
          {formState.state === "email" && (
            <>
              <EmailForm
                handleOpenLoader={setLoader}
                chnageForm={setFormState}
              />
            </>
          )}
          {formState.state === "otp" && (
            <>
              <OtpForm
                email={formState.email}
                chnageForm={setFormState}
                openLoader={handleOpenLoader}
                closeLoader={handleCloseLoader}
              />
            </>
          )}
          {formState.state === "details" && <Details />}
        </AuthBoxArea>
      </AuthBoxBlock>

      <LoadModal open={loader.open} text={loader.text} />
    </>
  );
};

export default AuthBox;
