import React, { useState } from "react";
import { useSelector } from "react-redux";
import ActiveChatBlock from "./ActiveChatBlock";
import { ChatAreaBlock } from "./chatarea.styled";
import DefaultArea from "./DefaultArea";
import FriendProfile from "./FriendProfile";

const ChatArea = () => {
  const activeChatopen = useSelector((state) => state.activeChat.chatAreaOpen);
  const [openFriend, setOpenFriend] = useState({ open: false, data: null });

  const handleOpenFriend = (data) => setOpenFriend({ open: true, data });
  const handleCloseFriend = () => setOpenFriend({ open: false, data: null });

  return (
    <>
      <ChatAreaBlock chatAreaOpen={activeChatopen.toString()}>
        {activeChatopen ? (
          <ActiveChatBlock
            openFriend={handleOpenFriend}
            open={openFriend.open}
          />
        ) : (
          <DefaultArea />
        )}
        {openFriend.open && (
          <FriendProfile data={openFriend.data} close={handleCloseFriend} />
        )}
      </ChatAreaBlock>
    </>
  );
};

export default ChatArea;
