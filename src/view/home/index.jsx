import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import ChatArea from "./ChatArea";
import ChatListSection from "./ChatListSection";
import { FalseArea, HomeArea, HomeWrapper } from "./home.styled";
import LoaderScreen from "../../components/Loader";
import { useDispatch } from "react-redux";
import axiosInstance from "../../modules/Axios";
import { setUserData } from "../../store/userDataSlice";
import { setToken } from "../../modules/getAccessToken";
import { io } from "socket.io-client";

let socket;

const Home = () => {
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);

  useEffect(() => {
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

    socket = io(process.env.REACT_APP_BACKEND_URL);

    setTimeout(() => setLoad(false), 2000);
  }, [dispatch]);

  return (
    <>
      {load ? (
        <LoaderScreen />
      ) : (
        <HomeWrapper>
          <FalseArea></FalseArea>
          <HomeArea>
            <ChatListSection socket={socket} />
            <ChatArea socket={socket} />
          </HomeArea>
        </HomeWrapper>
      )}
    </>
  );
};

export default Home;
