import React from "react";
import {
  DeleteButton,
  FriendArea,
  FriendBody,
  FriendHead,
} from "./chatarea.styled";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import defaultImage from "../../../assets/images/defaultuser.jpg";

const FriendProfile = ({ close }) => {
  const handleImageError = (e) => (e.target.src = defaultImage);
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
          <img src={""} onError={handleImageError} alt="x" />
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
