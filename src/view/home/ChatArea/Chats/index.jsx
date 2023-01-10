import React from "react";
import { ChatRow, ChatsBlock, ChatTexts } from "./chats.styled";
import bgImage from "../../../../assets/images/chatbg.jpg";

const Chats = () => {
  return (
    <>
      <ChatsBlock backgroundImage={bgImage}>
        <ChatRow direction="out">
          <ChatTexts direction="out">Hello World</ChatTexts>
        </ChatRow>
        <ChatRow direction="in">
          <ChatTexts direction="in">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum
            nihil rerum at accusantium maiores, fugiat nemo quis omnis laborum,
            aliquid labore quia debitis iusto doloremque tempora reiciendis.
            Minima eos officia mollitia quibusdam soluta quis, optio pariatur,
            aperiam iste et laboriosam nisi temporibus voluptatum laudantium
            exercitationem voluptas aliquam cumque tempora veniam?
          </ChatTexts>
        </ChatRow>
      </ChatsBlock>
    </>
  );
};

export default Chats;
