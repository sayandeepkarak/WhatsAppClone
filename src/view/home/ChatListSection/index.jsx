import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ChatListBlock } from "./chatlistsection.styled";
import HeadSection from "./HeadSection";
import ListArea from "./ListArea";
import NewChat from "./NewChat";
import ProfileSection from "./ProfileSection";
import SearchBar from "./SearchBar";
import SlideBlock from "./SlideBlock";

const ChatListSection = () => {
  const activeChatopen = useSelector(
    (state) => state.activeChat.value.chatAreaOpen
  );
  const [listState, setListState] = useState("chatlist");

  const handleOpenChatList = () => setListState("chatlist");

  return (
    <ChatListBlock chatAreaOpen={activeChatopen.toString()}>
      {listState === "chatlist" && (
        <>
          <HeadSection setList={setListState} />
          <SearchBar />
          <ListArea />
        </>
      )}

      {listState === "profile" && (
        <>
          <SlideBlock closeProfile={handleOpenChatList} headText="Profile">
            <ProfileSection />
          </SlideBlock>
        </>
      )}

      {listState === "newchat" && (
        <>
          <SlideBlock closeProfile={handleOpenChatList} headText="New Chat">
            <NewChat />
          </SlideBlock>
        </>
      )}
    </ChatListBlock>
  );
};

export default ChatListSection;
