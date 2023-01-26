import React, { useEffect } from "react";
import { ChatRow, ChatsBlock, ChatTexts } from "./chats.styled";
import bgImage from "../../../../assets/images/chatbg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getAccessToken from "../../../../modules/getAccessToken";
import axiosInstance from "../../../../modules/Axios";
import { openChatArea } from "../../../../store/activeChatSlice";
// import { useEffect } from "react";

const Chats = () => {
  const { chats, _id } = useSelector((state) => state.activeChat.chatData);
  const userData = useSelector((state) => state.userData.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllChats = setInterval(async () => {
      try {
        const accesstoken = await getAccessToken();
        !accesstoken && navigate("/authentication");
        const chatRes = await axiosInstance("/api/allChats", {
          headers: { Authorization: `Bearer ${accesstoken}` },
          params: { chatId: _id },
        });
        if (chatRes.status !== 204) {
          dispatch(openChatArea(chatRes.data.data[0]));
        }
      } catch (error) {
        console.log(error);
      }
    }, 1000);
    return () => clearInterval(getAllChats);
  }, [navigate, dispatch, _id]);

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
