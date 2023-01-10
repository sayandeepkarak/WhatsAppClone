import React from "react";
import { useSelector } from "react-redux";
import ActiveChatBlock from "./ActiveChatBlock";
import { ChatAreaBlock } from "./chatarea.styled";
import DefaultArea from "./DefaultArea";

const ChatArea = () => {
  const activeChatopen = useSelector((state) => state.activeChat.chatAreaOpen);
  return (
    <>
      <ChatAreaBlock chatAreaOpen={activeChatopen.toString()}>
        {activeChatopen ? <ActiveChatBlock /> : <DefaultArea />}
      </ChatAreaBlock>
    </>
  );
};

export default ChatArea;
