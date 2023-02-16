import React from "react";
import { HeadSectionArea, RoundedButton } from "./chatlistsection.styled";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import ChatIcon from "@mui/icons-material/Chat";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";
import axiosInstance from "../../../modules/Axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import defaultImage from "../../../assets/images/defaultuser.jpg";
import { setToken } from "../../../modules/getAccessToken";

const HeadSection = ({ setList }) => {
  const userData = useSelector((state) => state.userData.value);
  const navigate = useNavigate();
  const photoUrl = `${String(userData.photoUrl).replace("\\", "/")}`;
  const [img, setImg] = useState(photoUrl);

  const handleImageError = () => {
    setImg(defaultImage);
  };

  const handleOpenProfile = () => {
    setList("profile");
  };
  const handleOpenNewChat = () => {
    setList("newchat");
  };

  const handleLogout = async () => {
    let accesstoken = Cookies.get("access-key");
    if (!accesstoken) {
      accesstoken = await setToken();
    }
    try {
      const refreshToken = Cookies.get("refresh-key");
      await axiosInstance.post(
        "api/logout",
        { refreshToken },
        {
          headers: {
            Authorization: `Bearer ${accesstoken}`,
          },
        }
      );
      Cookies.remove("access-key");
      Cookies.remove("refresh-key");
      navigate("/authentication");
    } catch (error) {
      if (error.response.status === 401) {
        await setToken();
        handleLogout();
      }
    }
  };

  return (
    <>
      <HeadSectionArea>
        <span onClick={handleOpenProfile}>
          <Avatar
            id="mainAvatar"
            alt="x"
            src={img}
            imgProps={{
              onError: handleImageError,
            }}
            sx={{ cursor: "pointer" }}
          />
        </span>
        <RoundedButton onClick={handleOpenNewChat}>
          <ChatIcon />
        </RoundedButton>
        <RoundedButton onClick={handleLogout}>
          <LogoutIcon />
        </RoundedButton>
      </HeadSectionArea>
    </>
  );
};

export default HeadSection;
