import styled from "styled-components";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";

export const ChatAreaBlock = styled.div`
  height: 100%;
  width: 70%;
  @media (max-width: 1200px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 100%;
    ${({ chatAreaOpen }) => chatAreaOpen === "false" && "display:none"};
  }
`;

export const DefaultAreaBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--chat-dark);
  height: 100%;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 5px;
    width: 100%;
    background-color: var(--teal);
  }

  span#lock-icon-text {
    display: flex;
    font-size: 13px;
    align-items: center;
    gap: 5px;
    color: var(--text-low-sec);
    position: absolute;
    bottom: 40px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DefaultTextArea = styled(motion.div).attrs({
  initial: { opacity: 0, y: 20 },
  animate: { y: 0, opacity: 1 },
  transition: { type: "tween", delay: 0.6, duration: 0.4 },
})`
  text-align: center;
  p {
    color: var(--text-low-light);
    font-size: 28px;
    font-weight: 200;
    margin: 30px 0 14px 0;
  }
  span {
    color: var(--text-low-sec);
    font-size: 13px;
    letter-spacing: 0.1px;
  }
`;

export const DefaultImage = styled(motion.img).attrs({
  initial: { height: "0px" },
  animate: { height: "250px" },
  transition: { type: "tween", delay: 0.6, duration: 0.4 },
})``;

export const ChatBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`;

export const MiniBlocks = styled.div`
  max-height: 60px;
  min-height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: var(--chat-dark);
  padding: 0px 16px;
  @media (max-width: 768px) {
    padding: 0px 16px 0px 4px;
  }
`;

export const ChatHeadTextArea = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
  user-select: none;
  p#chatName {
    color: #fff;
    font-weight: 400;
  }
  p#chatStatus {
    color: var(--icon);
    font-size: 12px;
    letter-spacing: 0.2px;
  }
`;

export const ChatsSection = styled.div`
  min-height: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background-color: var(--chat-dark);
`;

export const ChatInput = styled.input.attrs({
  type: "text",
  placeholder: "Type a message",
})`
  width: inherit;
  border: none;
  outline: none;
  background-color: #2a3942;
  border-radius: 3pxwidth;
  border-radius: 8px;
  padding: 10px 15px;
  font-size: 15px;
  color: var(--icon);
  margin-right: 10px;
  &::placeholder {
    color: var(--icon);
  }
`;

export const EmojiPopover = styled(Popover).attrs({
  anchorOrigin: {
    vertical: "top",
    horizontal: "right",
  },
  transformOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
})``;

export const RoundedButton = styled(IconButton).attrs({
  sx: {
    color: "var(--icon)",
  },
})``;

export const RoundedButtonMobile = styled(RoundedButton).attrs({
  sx: {
    color: "var(--icon)",
    "@media(min-width:768px)": {
      display: "none",
    },
  },
})``;
