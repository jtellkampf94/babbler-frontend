import React from "react";
import ReactDOM from "react-dom";

import {
  Overlay,
  ModalContent,
  ModalHeader,
  CloseButton,
} from "./Modal.styles";
import CloseIcon from "../../icons/CloseIcon/CloseIcon";
import theme from "../../../config/theme";

const Modal = ({ children, toggleModal }) => {
  return ReactDOM.createPortal(
    <Overlay onClick={toggleModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <CloseButton onClick={toggleModal}>
            <CloseIcon width="16px" height="16px" color={theme.babbler} />
          </CloseButton>
        </ModalHeader>
        {children}
      </ModalContent>
    </Overlay>,
    document.getElementById("modal-root")
  );
};

export default Modal;
