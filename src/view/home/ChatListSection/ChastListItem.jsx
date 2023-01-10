import React from "react";
import {
  ChatListItemBlock,
  ElipsisText,
  ListDetailsBlock,
  ListTextArea,
} from "./chatlistsection.styled";
import Avatar from "@mui/material/Avatar";
import meImg from "../../../assets/images/me.jpg";
import { useDispatch } from "react-redux";
import { openChatArea } from "../../../store/activeChatSlice";

const ChastListItem = () => {
  const dispatch = useDispatch();

  const handleChatOpen = () => dispatch(openChatArea());

  return (
    <>
      <ChatListItemBlock onClick={handleChatOpen}>
        <Avatar
          id="mainAvatar"
          alt="x"
          src={meImg}
          sx={{ cursor: "pointer", width: 45, height: 45 }}
          sizes="large"
        />
        <ListDetailsBlock>
          <ListTextArea pos="top">
            <p className="chatName">Clear Chat King</p>
            <p className="lasttext">11:55</p>
          </ListTextArea>
          <ElipsisText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
            sint.
          </ElipsisText>
        </ListDetailsBlock>
      </ChatListItemBlock>
    </>
  );
};

export default ChastListItem;
