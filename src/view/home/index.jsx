import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import ChatArea from "./ChatArea";
import ChatListSection from "./ChatListSection";
import { FalseArea, HomeArea, HomeWrapper } from "./home.styled";
import LoaderScreen from "../../components/Loader";
import { useDispatch } from "react-redux";
import axiosInstance from "../../modules/Axios";
import { setUserData } from "../../store/userDataSlice";
import SocketProvider from "../../context/SocketProvider";
import { setToken } from "../../modules/getAccessToken";

const Home = () => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);
  const render = useRef(true);

  useEffect(() => {
    if (!render) return;
    const getUserData = async () => {
      let accesstoken = Cookies.get("access-key");
      if (!accesstoken) {
        accesstoken = await setToken();
      }
      try {
        const res = await axiosInstance.get("/api/userDetails", {
          headers: { Authorization: `Bearer ${accesstoken}` },
        });
        dispatch(setUserData(res.data.userdata));
      } catch (error) {
        if (error.response.status === 401) {
          await setToken();
          getUserData();
        }
      }
    };
    getUserData();

    setTimeout(() => setLoad(false), 2000);
    render.current = false;
  }, [dispatch]);

  return (
    <>
      <SocketProvider>
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
      </SocketProvider>
    </>
  );
};

export default Home;
