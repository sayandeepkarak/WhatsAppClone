import styled from "styled-components";
import Button from "@mui/material/Button";

export const AuthScreenBlock = styled.div`
  width: 100%;
  max-height: 100vh;
  height: 100vh;
  background-color: var(--dark);
`;

export const AuthScreenTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 222px;
  background-color: var(--theme);
`;

export const AuthLogoBlock = styled.div`
  width: 1070px;
  height: auto;
  margin: 22px auto 28px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  span {
    color: white;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const Logo = styled.img.attrs({
  alt: "x",
})`
  height: 50px;
`;

export const AuthBoxBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 132px;
`;

export const AuthBoxArea = styled.div`
  background-color: #fff;
  width: 910px;
  height: 100%;
  border-radius: 3px 3px 0px 0px;
  filter: drop-shadow(2px 2px 7px #00000022);
  padding: 64px 62px;
`;

export const HeadText = styled.p`
  text-transform: capitalize;
  font-weight: 300;
  font-size: 28px;
  color: var(--text-dark);
`;

export const AuthForm = styled.form.attrs({ autoComplete: "off" })`
  margin-top: 20px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

export const FormLabel = styled.label`
  font-size: 20px;
  &::first-letter {
    text-transform: capitalize;
  }
  font-weight: 500;
  color: var(--teal);
`;

export const AuthTextBox = styled.input.attrs({
  type: "text",
})`
  padding: 4px;
  caret-color: var(--theme);
  outline: none;
  border: none;
  border-bottom: 2px solid var(--theme);
  width: 40%;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  &:focus {
    border-bottom: 2px solid var(--teal);
  }
`;

export const ThemeButton = styled(Button).attrs({
  variant: "contained",
  sx: {
    backgroundColor: "var(--teal)",
    borderRadius: "3px",
    "&: hover": {
      backgroundColor: "var(--teal)",
    },
  },
})``;

export const OtpTextBox = styled(AuthTextBox).attrs({
  minLength: "6",
  maxLength: "6",
  placeholder: "-   -   -   -   -   -",
})`
  letter-spacing: 8px;
  width: 24%;
  font-size: 25px;
  padding: 0% 2%;
  &::placeholder {
    letter-spacing: 0;
  }
`;

export const AuthInfoText = styled.p`
  text-align: center;
  font-size: 14px;
  span#emailTxt {
    color: #000;
    font-weight: bold;
  }
  span#wrongTxt {
    text-decoration: none;
    color: blue;
    cursor: pointer;
  }
`;

export const AuthOptionText = styled.button.attrs({
  type: "button",
})`
  font-size: 15px;
  &::first-letter {
    text-transform: capitalize;
  }
  font-weight: 700;
  color: var(--teal);
  cursor: pointer;
  border: none;
  background: transparent;
`;
