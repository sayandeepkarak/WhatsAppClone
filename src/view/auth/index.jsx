import React, { useEffect, useState } from "react";
import {
  AuthLogoBlock,
  AuthScreenBlock,
  AuthScreenTop,
  Logo,
} from "./auth.styled";
import logo from "../../assets/images/icon-transparent.png";
import AuthBox from "./AuthBox";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import LoaderScreen from "../../components/Loader";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoadable, setIsLoadable] = useState(true);

  useEffect(() => {
    const refreshtoken = Cookies.get("refresh-key");
    if (refreshtoken) {
      navigate("/");
    } else {
      setTimeout(() => {
        setIsLoadable((old) => !old);
      }, 400);
    }
  }, [navigate]);
  return (
    <>
      {isLoadable ? (
        <LoaderScreen />
      ) : (
        <AuthScreenBlock>
          <AuthScreenTop>
            <AuthLogoBlock>
              <Logo src={logo} />
              <span>whatsapp clone</span>
            </AuthLogoBlock>
          </AuthScreenTop>
          <AuthBox />
        </AuthScreenBlock>
      )}
    </>
  );
};

export default Auth;
