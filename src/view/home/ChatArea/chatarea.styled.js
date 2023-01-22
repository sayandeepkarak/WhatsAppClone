import styled from "styled-components";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";

export const ChatAreaBlock = styled.div`
  height: 100%;
  width: 70%;
  display: flex;
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
  width: 100%;
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
  @media (max-width: 1200px) {
    display: ${({ openFriend }) => openFriend && "none"};
  }
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
  cursor: pointer;
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

export const FriendArea = styled(motion.div).attrs({
  initial: {
    opacity: 0,
    x: 150,
  },
  animate: {
    opacity: 1,
    x: 0,
    borderLeft: "1px solid var(--text-dark)",
  },
  transition: {
    type: "tween",
    duration: 0.2,
  },
})`
  height: 100%;
  width: 170%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* border-left: 1px solid var(--text-dark); */
`;

export const FriendHead = styled.div`
  width: 100%;
  min-height: 60px;
  background-color: var(--chat-dark);
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0px 16px;
  padding-top: auto;
  gap: 20px;
  button {
    color: var(--text-light);
  }
  p {
    color: var(--text-light);
    font-size: 18px;
    font-weight: 500;
  }
`;

export const FriendBody = styled(motion.div).attrs({
  initial: {
    opacity: 0,
    y: -15,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    type: "tween",
    duration: 0.2,
    delay: 0.3,
  },
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 25px 0px;
  border-bottom: 5px solid var(--bottom-shadow);
  img {
    height: 200px;
    border-radius: 50%;
  }
  p {
    font-size: 24px;
    color: var(--text-light);
  }
`;

export const DeleteButton = styled(Button).attrs({
  color: "error",
  sx: {
    textTransform: "none",
    marginTop: "auto",
    gap: "15px",
    fontSize: "18px",
    height: "50px",
    width: "100%",
  },
  // variant: "",
})``;
