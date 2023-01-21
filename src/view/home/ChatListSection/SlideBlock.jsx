import React from "react";
import { SlideBlockArea, SlideBlockHead } from "./chatlistsection.styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

const SlideBlock = ({ headText, closeProfile, children }) => {
  return (
    <>
      <SlideBlockArea>
        <SlideBlockHead>
          <IconButton onClick={closeProfile}>
            <ArrowBackIcon />
          </IconButton>
          <p>{headText}</p>
        </SlideBlockHead>
        {children}
      </SlideBlockArea>
    </>
  );
};

export default SlideBlock;
