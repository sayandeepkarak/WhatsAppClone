import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatArea from "./ChatArea";
import ChatListSection from "./ChatListSection";
import { FalseArea, HomeArea, HomeWrapper } from "./home.styled";
import LoaderScreen from "../../components/Loader";
import { useDispatch } from "react-redux";
import axiosInstance from "../../modules/Axios";
import { setUserData } from "../../store/userDataSlice";
import getAccessToken from "../../modules/getAccessToken";
import SocketProvider from "../../context/SocketProvider";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);

  useEffect(() => {
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

    setTimeout(() => setLoad(false), 2000);
  }, [navigate, dispatch]);

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
