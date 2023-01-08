import React from "react";
import { LoadScreenArea } from "./loader.styled";
import { BarLoader } from "react-spinners";
import whatsappimg from "../../assets/images/grey.png";
import LockIcon from "@mui/icons-material/Lock";

const LoaderScreen = () => {
  return (
    <>
      <LoadScreenArea>
        <img src={whatsappimg} alt="x" />
        <BarLoader color="#00a884" width={350} />
        <p>WhatsApp</p>
        <span>
          <LockIcon sx={{ fontSize: "13px" }} />
          End-to-end-encrypted
        </span>
      </LoadScreenArea>
    </>
  );
};

export default LoaderScreen;
