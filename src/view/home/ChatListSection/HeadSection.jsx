import React from "react";
import { HeadSectionArea, RoundedButton } from "./chatlistsection.styled";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import ChatIcon from "@mui/icons-material/Chat";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";
import axiosInstance from "../../../modules/Axios";
import { useSelector } from "react-redux";

const HeadSection = () => {
  const userData = useSelector((state) => state.userData.value);
  const navigate = useNavigate();
  const photoUrl = `${process.env.REACT_APP_BACKEND_URL}${String(
    userData.photoUrl
  ).replace("\\", "/")}`;

  const handleLogout = async () => {
    try {
      const refreshToken = Cookies.get("refresh-key");
      !refreshToken && navigate("/authentication");
      const getTokens = await axiosInstance.post("/api/refresh", {
        refreshToken,
      });
      const data = getTokens.data.message;
      Cookies.set("refresh-key", data.refreshToken, { path: "/" });
      await axiosInstance.post(
        "api/logout",
        { refreshToken: data.refreshToken },
        {
          headers: {
            Authorization: `Bearer ${data.accessToken}`,
          },
        }
      );
      Cookies.remove("refresh-key");
      navigate("/authentication");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeadSectionArea>
        <span>
          <Avatar
            id="mainAvatar"
            alt="x"
            src={photoUrl}
            sx={{ cursor: "pointer" }}
          />
        </span>
        <RoundedButton>
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
