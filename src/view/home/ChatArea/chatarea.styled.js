import styled from "styled-components";

export const ChatAreaBlock = styled.div`
  height: 100%;
  width: 70%;
  @media (max-width: 1200px) {
    width: 60%;
  }
`;

export const DefaultAreaBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--chat-dark);
  height: 100%;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 5px;
    width: 100%;
    background-color: var(--teal);
  }
  img {
    height: 250px;
  }
  p {
    color: var(--text-low-light);
    font-size: 28px;
    font-weight: 200;
    margin: 30px 0 14px 0;
  }
  span {
    color: var(--text-low-sec);
    font-size: 13px;
    text-align: center;
    letter-spacing: 0.1px;
  }
  span#lock-icon-text {
    display: flex;
    font-size: 13px;
    align-items: center;
    gap: 5px;
    color: var(--text-low-sec);
    position: absolute;
    bottom: 40px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
