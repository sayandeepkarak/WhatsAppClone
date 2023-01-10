import React from "react";
import { useSelector } from "react-redux";
import { ChatListBlock } from "./chatlistsection.styled";
import HeadSection from "./HeadSection";
import ListArea from "./ListArea";
import SearchBar from "./SearchBar";

const ChatListSection = () => {
  const activeChatopen = useSelector((state) => state.activeChat.chatAreaOpen);
  return (
    <>
      <ChatListBlock chatAreaOpen={activeChatopen.toString()}>
        <HeadSection />
        <SearchBar />
        <ListArea />
      </ChatListBlock>
    </>
  );
};

export default ChatListSection;
