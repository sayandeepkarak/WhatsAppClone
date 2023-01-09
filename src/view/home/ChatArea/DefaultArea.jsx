import React from "react";
import { DefaultAreaBlock } from "./chatarea.styled";
import defaultImg from "../../../assets/images/default.jpg";
import LockIcon from "@mui/icons-material/Lock";

const DefaultArea = () => {
  return (
    <>
      <DefaultAreaBlock>
        <img src={defaultImg} alt="x" />
        <p>WhastApp Clone</p>
        <span>
          Send and receive messages without keeping your phone online.
          <br />
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </span>
        <span id="lock-icon-text">
          <LockIcon sx={{ fontSize: "13px" }} />
          End-to-end-encrypted
        </span>
      </DefaultAreaBlock>
    </>
  );
};

export default DefaultArea;