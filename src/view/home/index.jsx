import React from "react";
import ChatArea from "./ChatArea";
import ChatListSection from "./ChatListSection";
import { FalseArea, HomeArea, HomeWrapper } from "./home.styled";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <FalseArea></FalseArea>
        <HomeArea>
          <ChatListSection />
          <ChatArea />
        </HomeArea>
      </HomeWrapper>
    </>
  );
};

export default Home;
