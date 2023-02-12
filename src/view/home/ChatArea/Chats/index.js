import React, { useEffect, useRef } from "react";
import { ChatRow, ChatsBlock, ChatTexts } from "./chats.styled";
import bgImage from "../../../../assets/images/chatbg.jpg";
import { useSelector } from "react-redux";

const Chats = () => {
  const chats = useSelector((state) => state.activeChat.value.chat);
  const userData = useSelector((state) => state.userData.value);
  const chatsBlockRef = useRef(null);

  useEffect(() => {
    chatsBlockRef.current.scrollIntoView();
  }, [chats]);

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
        <div ref={chatsBlockRef}></div>
      </ChatsBlock>
    </>
  );
};

export default Chats;
