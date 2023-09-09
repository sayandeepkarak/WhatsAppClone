import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import ChatArea from "./ChatArea";
import ChatListSection from "./ChatListSection";
import { FalseArea, HomeArea, HomeWrapper } from "./home.styled";
import LoaderScreen from "../../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../modules/Axios";
import { setUserData } from "../../store/userDataSlice";
import { setToken } from "../../modules/getAccessToken";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

let socket;

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, fullName } = useSelector(({ userData }) => userData.value);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const getUserData = async () => {
      const accesstoken = Cookies.get("access-key");
      if (!accesstoken) {
        !(await setToken()) && navigate("/authentication");
      }
      try {
        const res = await axiosInstance.get("/api/userDetails");
        dispatch(setUserData(res.data.userdata));
      } catch (error) {
        if (error.response.status === 401) {
          !(await setToken()) ? navigate("/authentication") : getUserData();
        }
      }
    };
    getUserData().then(() => {
      if (_id) {
        socket = io(process.env.REACT_APP_BACKEND_URL, {
          query: { userId: _id, name: fullName },
        });
      }
      setTimeout(() => setLoad(false), 2000);
    });
  }, [dispatch, _id, fullName, navigate]);

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
