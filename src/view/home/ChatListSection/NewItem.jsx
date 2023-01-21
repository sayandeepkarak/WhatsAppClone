import React from "react";
import {
  ChatListItemBlock,
  ListDetailsBlock,
  ListTextArea,
} from "./chatlistsection.styled";
import meImg from "../../../assets/images/me.jpg";
import Avatar from "@mui/material/Avatar";

const NewItem = () => {
  return (
    <>
      <ChatListItemBlock>
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
          </ListTextArea>
        </ListDetailsBlock>
      </ChatListItemBlock>
    </>
  );
};

export default NewItem;
