import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const ChatListBlock = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-right: 1px solid var(--text-dark);
`;

export const HeadSectionArea = styled.div`
  width: 100%;
  height: 60px;
  background-color: var(--chat-dark);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 16px;
  gap: 10px;
  span {
    margin-right: auto;
  }
`;

export const RoundedButton = styled(IconButton).attrs({
  sx: {
    color: "var(--icon)",
  },
})``;
