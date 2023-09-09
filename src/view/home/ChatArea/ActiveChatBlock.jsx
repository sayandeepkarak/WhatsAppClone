import React, { useCallback, useState } from "react";
import Avatar from "@mui/material/Avatar";
import {
  MiniBlocks,
  ChatBlock,
  ChatHeadTextArea,
  RoundedButtonMobile,
} from "./chatarea.styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useDispatch, useSelector } from "react-redux";
import { closeChatArea, setActiveChat } from "../../../store/activeChatSlice";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { setToken } from "../../../modules/getAccessToken";
import axiosInstance from "../../../modules/Axios";
import Chats from "./Chats";
import ChatSend from "./ChatSend";
import { useNavigate } from "react-router-dom";

const ActiveChatBlock = ({ socket, openFriend, open }) => {
  const { friend, _id } = useSelector(
    (state) => state.activeChat.value.chatData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.userData.value);
  const [userActive, setUserActive] = useState(false);
  const [timerId, setTimerId] = useState("");

  const photoUrl = `${process.env.REACT_APP_BACKEND_URL}${friend.photoUrl}`;

  const handleCloseChat = () => {
    dispatch(closeChatArea());
  };
  const handleopenFriend = () => {
    openFriend(friend);
  };

  const getAllChats = useCallback(async () => {
    const accesstoken = Cookies.get("access-key");
    if (!accesstoken) {
      !(await setToken()) && navigate("/authentication");
    }
    try {
      const chatRes = await axiosInstance("/api/getChat", {
        params: { chatId: _id },
      });
      if (chatRes.status !== 204) {
        dispatch(setActiveChat(chatRes.data.data.chats));
      }
    } catch (error) {
      if (error.response.status === 401) {
        !(await setToken()) ? navigate("/authentication") : getAllChats();
      }
    }
  }, [_id, dispatch, navigate]);

  const handleMessageSend = async (message) => {
    try {
      await axiosInstance.post("/api/sendMessage", {
        message,
        userId: userData._id,
        chatId: _id,
      });
      socket?.emit("chatsend", _id, message);
      getAllChats();
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    getAllChats();

    socket?.emit("join-chat-room", _id);

    socket?.on("recieveUserResponse", function (chatId) {
      if (chatId === _id) {
        setUserActive(true);
        clearTimeout(timerId);
        const offlineTimer = setTimeout(() => {
          setUserActive(false);
        }, 1000);
        setTimerId(offlineTimer);
      }
    });

    socket?.on("chatUpdate", (chatId, message) => {
      chatId === _id && getAllChats();
    });

    return () => {
      socket?.off("chatUpdate");
      socket?.off("recieveUserResponse");
    };
  }, [dispatch, _id, getAllChats, socket, timerId]);

  return (
    <>
      <ChatBlock openFriend={open}>
        <MiniBlocks>
          <RoundedButtonMobile onClick={handleCloseChat}>
            <ArrowBackIcon />
          </RoundedButtonMobile>
          <Avatar
            id="mainAvatar"
            alt="x"
            src={photoUrl}
            sx={{ cursor: "pointer" }}
            onClick={handleopenFriend}
          />
          <ChatHeadTextArea onClick={handleopenFriend}>
            <p id="chatName">{friend.fullName}</p>
            <p id="chatStatus">{userActive ? "Online" : "Offline"}</p>
          </ChatHeadTextArea>
        </MiniBlocks>
        <Chats />
        <ChatSend sendMessage={handleMessageSend} />
      </ChatBlock>
    </>
  );
};

export default ActiveChatBlock;
