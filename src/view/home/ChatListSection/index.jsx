import React from "react";
import { ChatListBlock } from "./chatlistsection.styled";
import HeadSection from "./HeadSection";
import ListArea from "./ListArea";
import SearchBar from "./SearchBar";

const ChatListSection = () => {
  return (
    <>
      <ChatListBlock>
        <HeadSection />
        <SearchBar />
        <ListArea />
      </ChatListBlock>
    </>
  );
};

export default ChatListSection;
