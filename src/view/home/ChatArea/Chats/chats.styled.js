import styled from "styled-components";

export const ChatsBlock = styled.div.attrs({
  id: "chatsBlock",
})`
  display: flex;
  height: 100%;
  width: 100%;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  padding: 20px 50px;
  overflow: scroll;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const ChatRow = styled.div`
  margin: 4px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: ${({ direction }) =>
    direction === "in" ? "flex-start" : "flex-end"};
  transition: all 0.2s linear;
`;

export const ChatTexts = styled.div`
  min-height: 25px;
  border-radius: ${({ direction }) =>
    direction === "in" ? "8px 8px 8px 0px" : "8px 8px 0px 8px"};
  display: flex;
  align-items: center;
  word-wrap: break-word;
  background-color: ${({ direction }) =>
    direction === "in" ? "var(--chat-in)" : "var(--chat-out)"};
  max-width: 80%;
  padding: 8px 15px;
  font-size: 14px;
`;
