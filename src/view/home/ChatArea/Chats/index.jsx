import React, { useEffect } from "react";
import { ChatRow, ChatsBlock, ChatTexts } from "./chats.styled";
import bgImage from "../../../../assets/images/chatbg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getAccessToken from "../../../../modules/getAccessToken";
import axiosInstance from "../../../../modules/Axios";
import { useSocketContext } from "../../../../context/SocketProvider";
import { useState } from "react";

const Chats = () => {
  const { _id } = useSelector((state) => state.activeChat.value.chatData);
  const userData = useSelector((state) => state.userData.value);
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const socket = useSocketContext();

  useEffect(() => {
    const getChats = async () => {
      try {
        const accesstoken = await getAccessToken();
        !accesstoken && navigate("/authentication");
        const chatRes = await axiosInstance("/api/getChat", {
          headers: { Authorization: `Bearer ${accesstoken}` },
          params: { chatId: _id },
        });
        if (chatRes.status !== 204) {
          setChats(chatRes.data.data.chats);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getChats();

    socket.on("chatUpdate", () => {
      getChats();
    });

    return () => {
      socket.off("chatUpdate");
    };
  }, [navigate, dispatch, _id, socket]);

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
