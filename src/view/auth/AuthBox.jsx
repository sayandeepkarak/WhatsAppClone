import React, { useState } from "react";
import LoadModal from "../../components/LoadModal";
import { AuthBoxArea, AuthBoxBlock, HeadText } from "./auth.styled";
import EmailForm from "./EmailForm";
import OtpForm from "./OtpForm";

const AuthBox = () => {
  const [emailForm, setEmailForm] = useState({
    state: true,
    email: "",
  });
  const [loader, setLoader] = useState({
    open: false,
    text: "",
  });

  return (
    <>
      <AuthBoxBlock>
        <AuthBoxArea>
          <HeadText>welcome to whatsappclone</HeadText>
          {emailForm.state ? (
            <>
              <EmailForm
                handleOpenLoader={setLoader}
                turnOffForm={setEmailForm}
              />
            </>
          ) : (
            <>
              <OtpForm
                email={emailForm.email}
                restartProcess={setEmailForm}
                handleOpenLoader={setLoader}
              />
            </>
          )}
        </AuthBoxArea>
      </AuthBoxBlock>

      <LoadModal open={loader.open} text={loader.text} />
    </>
  );
};

export default AuthBox;
