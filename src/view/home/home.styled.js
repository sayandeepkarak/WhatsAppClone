import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;
  max-height: 100vh;
  height: 100vh;
  background-color: var(--dark);
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1440px) {
    padding: 0;
  }
`;

export const FalseArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--theme);
  height: 200px;
`;

export const HomeArea = styled.div`
  position: relative;
  background-color: var(--dark);
  height: 100%;
  width: 100%;
  border-radius: 3px;
  max-width: 1700px;
  display: flex;
`;
