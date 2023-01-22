import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import { motion } from "framer-motion";

export const ChatListBlock = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-right: 1px solid var(--text-dark);
  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    display: ${({ chatAreaOpen }) => chatAreaOpen === "true" && "none"};
    width: 100%;
  }
`;

export const HeadSectionArea = styled.div`
  width: 100%;
  min-height: 60px;
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

export const SearchBarArea = styled.div`
  width: 90%;
  min-height: 35px;
  margin: 8px 0px;
  background-color: var(--chat-dark);
  color: var(--icon);
  border-radius: 8px;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 17px;
  svg {
    font-size: 20px;
    cursor: pointer;
  }
`;

export const SearchBox = styled.input.attrs({
  type: "text",
  placeholder: "Search or start new chat",
})`
  color: var(--icon);
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  &::placeholder {
    color: var(--icon);
  }
`;

export const ChastListArea = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const ChatListItemBlock = styled.div`
  padding: 0px 13px;
  min-height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: var(--list-hover);
  }
`;

export const ListDetailsBlock = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid var(--list-hover);
`;

export const ListTextArea = styled.div`
  margin-top: 4px;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.pos === "top" ? "flex-end" : "flex-start")};
  p.chatName {
    color: var(--text-second);
    font-size: 16px;
  }
  p.lasttext {
    color: var(--icon);
    font-size: 12px;
    letter-spacing: 0.2px;
  }
`;

export const ElipsisText = styled.p`
  color: var(--icon);
  font-size: 12px;
  letter-spacing: 0.2px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const SlideBlockArea = styled(motion.div).attrs({
  initial: {
    opacity: 0.1,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    type: "tween",
    duration: 0.3,
  },
})`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SlideBlockHead = styled.div`
  width: 100%;
  min-height: 110px;
  background-color: var(--chat-dark);
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 50px 16px 0px;
  padding-top: auto;
  gap: 20px;
  button {
    color: var(--text-light);
  }
  p {
    color: var(--text-light);
    font-size: 18px;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    min-height: 60px;
    padding: 0px 16px;
  }
`;

export const ProfileImageArea = styled(motion.div).attrs({})`
  height: 200px;
  display: grid;
  place-items: center;
  margin: 25px 0px;
  cursor: pointer;
`;

export const ProfileImage = styled(motion.img).attrs({
  initial: { height: "40px", width: "40px", opacity: 0 },
  animate: {
    height: "200px",
    width: "200px",
    opacity: 1,
  },
  transition: {
    type: "tween",
    delay: 0.2,
  },
})`
  border-radius: 50%;
`;

export const ProfileDetailsBlock = styled(motion.div).attrs({
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "tween",
    delay: 0.4,
  },
})`
  width: 100%;
  padding: 15px 25px;
  display: flex;
  flex-direction: column;
  margin: 0px 5px;
  gap: 20px;
  box-shadow: 0 2px 4px var(--bottom-shadow);
  p {
    color: var(--teal);
    font-size: 14px;
  }
  span {
    color: var(--text-light);
  }
`;
