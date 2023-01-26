import React, { useState } from "react";
import {
  ChatInput,
  EmojiPopover,
  MiniBlocks,
  RoundedButton,
} from "./chatarea.styled";
import EmojiPicker from "emoji-picker-react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SendIcon from "@mui/icons-material/Send";
import axiosInstance from "../../../modules/Axios";
import { useSelector } from "react-redux";

const ChatSend = () => {
  const userData = useSelector((state) => state.userData.value);
  const { _id } = useSelector((state) => state.activeChat.chatData);
  const [anchorEl, setAnchorEl] = useState(null);
  const [input, setInput] = useState("");

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleChange = (e) => setInput(e.target.value);
  const handleTypeEmoji = ({ emoji }) => setInput(input + emoji);

  const handleMessageSend = async () => {
    try {
      console.log(userData._id);
      const sendRes = await axiosInstance.post("/api/sendMessage", {
        message: input,
        userId: userData._id,
        chatId: _id,
      });
      console.log(sendRes);
    } catch (error) {
      console.log(error);
    } finally {
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    e.key === "Enter" && handleMessageSend();
  };

  const open = Boolean(anchorEl);
  const id = open ? "emoji-modal" : undefined;

  return (
    <>
      <MiniBlocks>
        <RoundedButton onClick={handleClick} aria-describedby={id}>
          <EmojiEmotionsIcon />
        </RoundedButton>
        <ChatInput
          value={input}
          onChange={handleChange}
          onKeyUp={handleKeyPress}
        />
        <SendIcon
          onClick={handleMessageSend}
          sx={{ color: "var(--icon)", cursor: "pointer" }}
        />
      </MiniBlocks>
      <EmojiPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <EmojiPicker
          onEmojiClick={handleTypeEmoji}
          autoFocusSearch={false}
          theme="dark"
        />
      </EmojiPopover>
    </>
  );
};

export default ChatSend;
