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

const FriendProfile = ({ close, data }) => {
  const photo = `${String(data.photoUrl).replace("\\", "/")}`;

  const handleImageError = (e) => (e.target.src = defaultImage);
  return (
    <>
      <FriendArea>
        <FriendHead>
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
          <p>{data.fullName}</p>
        </FriendHead>
        <FriendBody>
          <img src={photo} onError={handleImageError} alt="x" />
          <p>{data.fullName}</p>
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
