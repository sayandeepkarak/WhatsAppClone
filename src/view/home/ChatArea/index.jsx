import React, { useState } from "react";
import { useSelector } from "react-redux";
import ActiveChatBlock from "./ActiveChatBlock";
import { ChatAreaBlock } from "./chatarea.styled";
import DefaultArea from "./DefaultArea";
import FriendProfile from "./FriendProfile";

const ChatArea = () => {
  const activeChatopen = useSelector((state) => state.activeChat.chatAreaOpen);
  const [openFriend, setOpenFriend] = useState(false);

  const handleOpenFriend = () => setOpenFriend(true);
  const handleCloseFriend = () => setOpenFriend(false);

  return (
    <>
      <ChatAreaBlock chatAreaOpen={activeChatopen.toString()}>
        {activeChatopen ? (
          <ActiveChatBlock openFriend={handleOpenFriend} open={openFriend} />
        ) : (
          <DefaultArea />
        )}
        {openFriend && <FriendProfile close={handleCloseFriend} />}
      </ChatAreaBlock>
    </>
  );
};

export default ChatArea;
