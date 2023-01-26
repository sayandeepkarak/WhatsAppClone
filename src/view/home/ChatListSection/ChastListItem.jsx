import React, { useEffect } from "react";
import {
  ChatListItemBlock,
  ElipsisText,
  ListDetailsBlock,
  ListTextArea,
} from "./chatlistsection.styled";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";
import { openChatArea } from "../../../store/activeChatSlice";
import { useState } from "react";

const ChastListItem = ({ data }) => {
  const { name, photoUrl } = data.users[0];
  const { chats } = data;
  const photo = `${process.env.REACT_APP_BACKEND_URL}${String(photoUrl).replace(
    "\\",
    "/"
  )}`;

  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    chats.length > 0 && setLastMessage(chats[chats.length - 1].message);
  }, [chats]);

  const dispatch = useDispatch();
  const handleChatOpen = () => dispatch(openChatArea(data));

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
