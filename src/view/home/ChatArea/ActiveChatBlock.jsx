import React from "react";
import Avatar from "@mui/material/Avatar";
import {
  MiniBlocks,
  ChatBlock,
  ChatHeadTextArea,
  RoundedButtonMobile,
} from "./chatarea.styled";
import Chats from "./Chats";
import ChatSend from "./ChatSend";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { closeChatArea } from "../../../store/activeChatSlice";

const ActiveChatBlock = ({ openFriend, open }) => {
  const { users } = useSelector((state) => state.activeChat.chatData);
  const photoUrl = `${process.env.REACT_APP_BACKEND_URL}${String(
    users[0].photoUrl
  ).replace("\\", "/")}`;

  const dispatch = useDispatch();
  const handleCloseChat = () => dispatch(closeChatArea());
  const handleopenFriend = () => openFriend(users[0]);

  return (
    <>
      <ChatBlock openFriend={open}>
        <MiniBlocks>
          <RoundedButtonMobile onClick={handleCloseChat}>
            <ArrowBackIcon />
          </RoundedButtonMobile>
          <Avatar
            id="mainAvatar"
            alt="x"
            src={photoUrl}
            sx={{ cursor: "pointer" }}
            onClick={handleopenFriend}
          />
          <ChatHeadTextArea onClick={handleopenFriend}>
            <p id="chatName">{users[0].name}</p>
            <p id="chatStatus">Online</p>
          </ChatHeadTextArea>
        </MiniBlocks>
        <Chats />
        <ChatSend />
      </ChatBlock>
    </>
  );
};

export default ActiveChatBlock;
