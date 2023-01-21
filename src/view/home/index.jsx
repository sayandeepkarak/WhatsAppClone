import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatArea from "./ChatArea";
import ChatListSection from "./ChatListSection";
import { FalseArea, HomeArea, HomeWrapper } from "./home.styled";
import LoaderScreen from "../../components/Loader";
import { useDispatch } from "react-redux";
import axiosInstance from "../../modules/Axios";
import { setUserData } from "../../store/userDataSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const render = useRef(true);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (!render.current) return;
    console.log("hello");
    const getUserData = async () => {
      const refreshToken = Cookies.get("refresh-key");
      !refreshToken && navigate("/authentication");
      try {
        const getTokens = await axiosInstance.post("/api/refresh", {
          refreshToken,
        });
        const data = getTokens.data.message;
        Cookies.set("refresh-key", data.refreshToken, { path: "/" });
        const res = await axiosInstance.get("/api/userDetails", {
          headers: {
            Authorization: `Bearer ${data.accessToken}`,
          },
        });
        dispatch(setUserData(res.data.userdata));
      } catch (error) {
        if (error.response.status === 401) {
          Cookies.remove("refresh-key");
          navigate("/authentication");
        }
        console.log(error);
      }
    };
    getUserData();
    render.current = false;
    setTimeout(() => setLoad(false), 2000);
  }, [navigate, dispatch]);

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
