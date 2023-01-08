import React from "react";
import { ChatAreaBlock } from "./chatarea.styled";
import DefaultArea from "./DefaultArea";

const ChatArea = () => {
  return (
    <>
      <ChatAreaBlock>
        <DefaultArea />
      </ChatAreaBlock>
    </>
  );
};

export default ChatArea;
