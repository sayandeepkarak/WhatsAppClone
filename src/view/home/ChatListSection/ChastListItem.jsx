import React, { useEffect, useState } from "react";
import {
  ChatListItemBlock,
  ElipsisText,
  ListDetailsBlock,
  ListTextArea,
} from "./chatlistsection.styled";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
import { openChatArea } from "../../../store/activeChatSlice";

const ChastListItem = ({ socket, data }) => {
  const { fullName, photoUrl } = data.friend;
  const { chats, _id } = data;
  const photo = `${process.env.REACT_APP_BACKEND_URL}${photoUrl}`;

  const dispatch = useDispatch();
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    socket.emit("join-chat-room", _id);

    let interval = setInterval(() => {
      socket.emit("sendActiveResponse", _id);
    }, 500);

    socket.on("chatUpdate", (chatId, message) => {
      if (chatId === _id) {
        setLastMessage(message);
        socket.emit("messageRecieved", chatId, message);
      }
    });

    socket.on("messageSent", (chatId, message) => {
      if (chatId === _id) {
        setLastMessage(message);
      }
    });

    chats && setLastMessage(chats.message);

    return () => {
      socket.off("chatUpdate");
      socket.off("messageSent");
      clearInterval(interval);
    };
  }, [chats, _id, socket]);

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
