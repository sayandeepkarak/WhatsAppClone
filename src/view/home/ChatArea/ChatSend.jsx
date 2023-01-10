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

const ChatSend = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [input, setInput] = useState("");

  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleChange = (e) => setInput(e.target.value);
  const handleTypeEmoji = ({ emoji }) => setInput(input + emoji);

  const handleMessageSend = () => {
    console.log(input);
    setInput("");
  };

  const open = Boolean(anchorEl);
  const id = open ? "emoji-modal" : undefined;

  return (
    <>
      <MiniBlocks>
        <RoundedButton onClick={handleClick} aria-describedby={id}>
          <EmojiEmotionsIcon />
        </RoundedButton>
        <ChatInput value={input} onChange={handleChange} />
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
        <EmojiPicker onEmojiClick={handleTypeEmoji} theme="dark" />
      </EmojiPopover>
    </>
  );
};

export default ChatSend;
