import React from "react";
import {
  ChatListItemBlock,
  ListDetailsBlock,
  ListTextArea,
} from "./chatlistsection.styled";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import axiosInstance from "../../../modules/Axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import getAccessToken from "../../../modules/getAccessToken";

const NewItem = ({ data }) => {
  const navigate = useNavigate();
  const photoUrl = `${process.env.REACT_APP_BACKEND_URL}${String(
    data.photoUrl
  ).replace("\\", "/")}`;

  const handleAddPerson = async () => {
    try {
      const accesstoken = await getAccessToken();
      !accesstoken && navigate("/authentication");
      const res = await axiosInstance.post(
        "/api/createConnection",
        {
          personId: data._id,
        },
        {
          headers: { Authorization: `Bearer ${accesstoken}` },
        }
      );
      console.log(res);
    } catch (error) {
      if (error.response.status === 401) {
        Cookies.remove("refresh-key");
        navigate("/authentication");
      }
      console.log(error);
    }
  };

  return (
    <>
      <ChatListItemBlock>
        <Avatar
          id="mainAvatar"
          alt="x"
          src={photoUrl}
          sx={{ cursor: "pointer", width: 45, height: 45 }}
          sizes="large"
        />
        <ListDetailsBlock>
          <ListTextArea pos="top">
            <p className="chatName">{data.fullName}</p>
          </ListTextArea>
        </ListDetailsBlock>
        <IconButton onClick={handleAddPerson} sx={{ color: "#00a884" }}>
          <PersonAddIcon />
        </IconButton>
      </ChatListItemBlock>
    </>
  );
};

export default NewItem;
