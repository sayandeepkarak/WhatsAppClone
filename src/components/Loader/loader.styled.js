import styled from "styled-components";

export const LoadScreenArea = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--dark);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    height: 50px;
    margin-bottom: 15px;
    margin-bottom: 50px;
  }
  p {
    margin: 22px 0px 5px 0px;
    color: #fff;
    font-weight: 300;
  }
  span {
    display: flex;
    font-size: 13px;
    align-items: center;
    gap: 5px;
    color: var(--text-dark);
  }
`;
