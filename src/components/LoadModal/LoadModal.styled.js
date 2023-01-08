import styled from "styled-components";

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 100px;
  border-radius: 3px;
  border: none;
  cursor: default;
  background-color: var(--bg-low-dark);
  outline: none;
  display: flex;
  align-items: center;
  padding: 0 35px;
  gap: 20px;
  p {
    color: #ffffff;
  }
`;
