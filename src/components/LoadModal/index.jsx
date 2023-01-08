import React from "react";
import Modal from "@mui/material/Modal";
import { ModalBox } from "./LoadModal.styled";
import Loading from "react-loading";

const LoadModal = ({ open, text }) => {
  return (
    <>
      <Modal open={open}>
        <ModalBox>
          <Loading type="spin" color="#00a884" height={40} width={40} />
          <p>{text}</p>
        </ModalBox>
      </Modal>
    </>
  );
};

export default LoadModal;
