import React, { useEffect, useState } from "react";
import {
  ChatListItemBlock,
  ElipsisText,
  ListDetailsBlock,
  ListTextArea,
} from "./chatlistsection.styled";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { openChatArea } from "../../../store/activeChatSlice";
import { useSocketContext } from "../../../context/SocketProvider";
import axiosInstance from "../../../modules/Axios";
import { setToken } from "../../../modules/getAccessToken";
import Cookies from "js-cookie";

const ChastListItem = ({ data }) => {
  const { fullName, photoUrl } = data.friend;
  const userData = useSelector((state) => state.userData.value);
  const { chats, _id } = data;
  const photo = `${process.env.REACT_APP_BACKEND_URL}${String(photoUrl).replace(
    "\\",
    "/"
  )}`;

  const dispatch = useDispatch();
  const socket = useSocketContext();
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    socket.emit("join-chat-room", _id);

    let interval = setInterval(() => {
      socket.emit("sendActiveResponse", _id);
    }, 1000);

    socket.on("chatUpdate", () => {
      const updateLastMessage = async () => {
        let accesstoken = Cookies.get("access-key");
        if (!accesstoken) {
          accesstoken = await setToken();
        }
        try {
          const lastMessage = await axiosInstance("/api/lastMessage", {
            headers: { Authorization: `Bearer ${accesstoken}` },
            params: {
              chatId: _id,
            },
          });
          setLastMessage(lastMessage.data.data.chats[0].message);
        } catch (error) {
          if (error.response.status === 401) {
            await setToken();
            updateLastMessage();
          }
        }
      };
      updateLastMessage();
    });
    chats && setLastMessage(chats.message);

    return () => {
      clearInterval(interval);
    };
  }, [socket, _id, userData._id, chats]);

  const handleChatOpen = () => {
    dispatch(openChatArea(data));
  };

  return (
    <>
      <ChatListItemBlock onClick={handleChatOpen}>
        <Avatar
          id="mainAvatar"
          alt="x"
          src={photo}
          sx={{ cursor: "pointer", width: 45, height: 45 }}
          sizes="large"
        />
        <ListDetailsBlock>
          <ListTextArea pos="top">
            <p className="chatName">{fullName}</p>
          </ListTextArea>
          <ElipsisText>{lastMessage}</ElipsisText>
        </ListDetailsBlock>
      </ChatListItemBlock>
    </>
  );
};

export default ChastListItem;
