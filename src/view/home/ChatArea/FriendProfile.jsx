import React from "react";
import {
  DeleteButton,
  FriendArea,
  FriendBody,
  FriendHead,
} from "./chatarea.styled";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import meImg from "../../../assets/images/me.jpg";
import DeleteIcon from "@mui/icons-material/Delete";

const FriendProfile = ({ close }) => {
  return (
    <>
      <FriendArea>
        <FriendHead>
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
          <p>Clear Chat King</p>
        </FriendHead>
        <FriendBody>
          <img src={meImg} alt="x" />
          <p>Clear Chat King</p>
        </FriendBody>
        <DeleteButton>
          <DeleteIcon />
          <span>Delete Chat</span>
        </DeleteButton>
      </FriendArea>
    </>
  );
};

export default FriendProfile;
