import React from "react";
import {
  AuthLogoBlock,
  AuthScreenBlock,
  AuthScreenTop,
  Logo,
} from "./auth.styled";
import logo from "../../assets/images/icon-transparent.png";
import AuthBox from "./AuthBox";

const Auth = () => {
  return (
    <>
      <AuthScreenBlock>
        <AuthScreenTop>
          <AuthLogoBlock>
            <Logo src={logo} />
            <span>whatsapp clone</span>
          </AuthLogoBlock>
        </AuthScreenTop>
        <AuthBox />
      </AuthScreenBlock>
    </>
  );
};

export default Auth;
