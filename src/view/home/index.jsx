import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatArea from "./ChatArea";
import ChatListSection from "./ChatListSection";
import { FalseArea, HomeArea, HomeWrapper } from "./home.styled";
import LoaderScreen from "../../components/Loader";

const Home = () => {
  const navigate = useNavigate();
  const render = useRef(true);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (!render.current) return;
    const refreshToken = Cookies.get("refreshttoken");
    if (refreshToken === undefined) {
      navigate("/authentication");
    }
    render.current = false;
    setLoad(false);
  }, [navigate]);

  return (
    <>
      {load ? (
        <LoaderScreen />
      ) : (
        <HomeWrapper>
          <FalseArea></FalseArea>
          <HomeArea>
            <ChatListSection />
            <ChatArea />
          </HomeArea>
        </HomeWrapper>
      )}
    </>
  );
};

export default Home;
