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
import getAccessToken from "../../../modules/getAccessToken";
import { useNavigate } from "react-router-dom";

const ChastListItem = ({ data }) => {
  const { name, photoUrl } = data.users[0];
  const userData = useSelector((state) => state.userData.value);
  const { chats, _id } = data;
  const photo = `${process.env.REACT_APP_BACKEND_URL}${String(photoUrl).replace(
    "\\",
    "/"
  )}`;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const socket = useSocketContext();
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    socket.emit("join-chat-room", _id);

    let interval = setInterval(() => {
      socket.emit("sendActiveResponse", _id);
    }, 500);

    socket.on("chatUpdate", () => {
      console.log("call it");
      const updateLastMessage = async () => {
        const accesstoken = await getAccessToken();
        !accesstoken && navigate("/authentication");
        try {
          const lastMessage = await axiosInstance("/api/lastMessage", {
            headers: { Authorization: `Bearer ${accesstoken}` },
            params: {
              chatId: _id,
            },
          });
          setLastMessage(lastMessage.data.data.chats[0].message);
        } catch (error) {
          console.log(error);
        }
      };
      updateLastMessage();
    });

    chats.length > 0 && setLastMessage(chats[0].message);

    return () => {
      clearInterval(interval);
      socket.off("chatUpdate");
    };
  }, [socket, _id, userData._id, chats, navigate]);

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
            <p className="chatName">{name}</p>
          </ListTextArea>
          <ElipsisText>{lastMessage}</ElipsisText>
        </ListDetailsBlock>
      </ChatListItemBlock>
    </>
  );
};

export default ChastListItem;
