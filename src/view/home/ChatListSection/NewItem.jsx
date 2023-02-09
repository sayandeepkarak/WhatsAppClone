import React from "react";
import {
  ChatListItemBlock,
  ListDetailsBlock,
  ListTextArea,
} from "./chatlistsection.styled";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import axiosInstance from "../../../modules/Axios";
import Cookies from "js-cookie";
import { setToken } from "../../../modules/getAccessToken";
import { useDispatch, useSelector } from "react-redux";
import { openChatArea } from "../../../store/activeChatSlice";

const NewItem = ({ data, friendsId }) => {
  const friends = useSelector((state) => state.friends.value);
  const dispatch = useDispatch();
  const photoUrl = `${process.env.REACT_APP_BACKEND_URL}${String(
    data.photoUrl
  ).replace("\\", "/")}`;

  const handleAddPerson = async () => {
    let accesstoken = Cookies.get("access-key");
    if (!accesstoken) {
      accesstoken = await setToken();
    }
    try {
      await axiosInstance.post(
        "/api/createConnection",
        {
          personId: data._id,
        },
        {
          headers: { Authorization: `Bearer ${accesstoken}` },
        }
      );
    } catch (error) {
      if (error.response.status === 401) {
        await setToken();
        handleAddPerson();
      }
    }
  };

  const handleClick = () => {
    if (friendsId.includes(data._id)) {
      const friendData = friends.find((e) => e.friend._id === data._id);
      dispatch(openChatArea(friendData));
    } else {
      handleAddPerson();
    }
  };

  return (
    <>
      <ChatListItemBlock onClick={handleClick}>
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
        <IconButton sx={{ color: "#00a884" }}>
          {friendsId.includes(data._id) ? <HowToRegIcon /> : <PersonAddIcon />}
        </IconButton>
      </ChatListItemBlock>
    </>
  );
};

export default NewItem;
