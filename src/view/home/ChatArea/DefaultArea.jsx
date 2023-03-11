import React from "react";
import {
  DefaultAreaBlock,
  DefaultImage,
  DefaultTextArea,
} from "./chatarea.styled";
import defaultImg from "../../../assets/images/default.jpg";
import LockIcon from "@mui/icons-material/Lock";

const DefaultArea = () => {
  return (
    <>
      <DefaultAreaBlock>
        <DefaultImage src={defaultImg} alt="x" />
        <DefaultTextArea>
          <p>WhastApp Clone</p>
          <span>
            Send and receive messages without keeping your phone online.
            <br />
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
          </span>
        </DefaultTextArea>
        <span id="lock-icon-text">
          <LockIcon sx={{ fontSize: "13px" }} />
          &#169; Sayandeep Karak 2023
        </span>
      </DefaultAreaBlock>
    </>
  );
};

export default DefaultArea;
