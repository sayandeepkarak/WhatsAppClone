import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { closeChatArea } from "../../../store/activeChatSlice";

const ActiveChatBlock = ({ openFriend, open }) => {
  const dispatch = useDispatch();
  const handleCloseChat = () => dispatch(closeChatArea());

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
            src={""}
            sx={{ cursor: "pointer" }}
            onClick={openFriend}
          />
          <ChatHeadTextArea onClick={openFriend}>
            <p id="chatName">Clear Chat King</p>
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
