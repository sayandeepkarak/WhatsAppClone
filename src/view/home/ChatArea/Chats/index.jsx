import React, { useEffect } from "react";
import { ChatRow, ChatsBlock, ChatTexts } from "./chats.styled";
import bgImage from "../../../../assets/images/chatbg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../../modules/getAccessToken";
import axiosInstance from "../../../../modules/Axios";
import { useSocketContext } from "../../../../context/SocketProvider";
import { setActiveChat } from "../../../../store/activeChatSlice";
import Cookies from "js-cookie";

const Chats = () => {
  const { _id } = useSelector((state) => state.activeChat.value.chatData);
  const chats = useSelector((state) => state.activeChat.value.chat);
  const userData = useSelector((state) => state.userData.value);
  const dispatch = useDispatch();
  const socket = useSocketContext();

  useEffect(() => {
    const getChats = async () => {
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
          getChats();
        }
      }
    };
    getChats();

    socket.on("chatUpdate", () => {
      getChats();
    });

    return () => {
      socket.off("chatUpdate");
    };
  }, [dispatch, _id, socket]);

  return (
    <>
      <ChatsBlock backgroundImage={bgImage}>
        {chats.map((e) => {
          const sentby = e.sendBy === userData._id ? "out" : "in";
          return (
            <ChatRow key={e._id} direction={sentby}>
              <ChatTexts direction={sentby}>{e.message}</ChatTexts>
            </ChatRow>
          );
        })}
      </ChatsBlock>
    </>
  );
};

export default Chats;
