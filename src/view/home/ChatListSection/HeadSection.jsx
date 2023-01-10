import React from "react";
import { HeadSectionArea, RoundedButton } from "./chatlistsection.styled";
import Avatar from "@mui/material/Avatar";
import meImg from "../../../assets/images/me.jpg";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const HeadSection = () => {
  return (
    <>
      <HeadSectionArea>
        <span>
          <Avatar
            id="mainAvatar"
            alt="x"
            src={meImg}
            sx={{ cursor: "pointer" }}
          />
        </span>
        <RoundedButton>
          <ChatIcon />
        </RoundedButton>
        <RoundedButton>
          <MoreVertIcon />
        </RoundedButton>
      </HeadSectionArea>
    </>
  );
};

export default HeadSection;
