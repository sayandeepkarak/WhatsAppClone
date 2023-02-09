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
import { useDispatch, useSelector } from "react-redux";
import { useSocketContext } from "../../../context/SocketProvider";
import { setActiveChat } from "../../../store/activeChatSlice";
import { setToken } from "../../../modules/getAccessToken";
import Cookies from "js-cookie";

const ChatSend = () => {
  const userData = useSelector((state) => state.userData.value);
  const { _id } = useSelector((state) => state.activeChat.value.chatData);
  const [anchorEl, setAnchorEl] = useState(null);
  const [input, setInput] = useState("");
  const socket = useSocketContext();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleTypeEmoji = ({ emoji }) => {
    setInput(input + emoji);
  };

  const getAllChats = async () => {
    let accesstoken = Cookies.get("access-key");
    if (!accesstoken) {
      accesstoken = await setToken();
    }
    try {
      const chatRes = await axiosInstance("/api/getChat", {
        headers: { Authorization: `Bearer ${accesstoken}` },
        params: { chatId: _id },
      });
      if (chatRes.status !== 204) {
        dispatch(setActiveChat(chatRes.data.data.chats));
      }
    } catch (error) {
      if (error.response.status === 401) {
        await setToken();
        getAllChats();
      }
    }
  };

  const handleMessageSend = async () => {
    try {
      await axiosInstance.post("/api/sendMessage", {
        message: input,
        userId: userData._id,
        chatId: _id,
      });
      socket.emit("chatsend", _id);
      getAllChats();
    } catch (error) {
      console.log("Error");
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
