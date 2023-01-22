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
import getAccessToken from "../../modules/getAccessToken";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const render = useRef(true);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (!render.current) return;
    const getUserData = async () => {
      try {
        const accesstoken = await getAccessToken();
        !accesstoken && navigate("/authentication");
        const res = await axiosInstance.get("/api/userDetails", {
          headers: {
            Authorization: `Bearer ${accesstoken}`,
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
