import React from "react";
import styled from "styled-components";

const ModalBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 0;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s, visibility 0.3s;
`;
const ModalContent = styled.div`
  max-width: 500px;
  width: 100%;
  height: min-content;
  padding: 30px 20px;
  background: var(--main-white);
`;

function Modal (props) {
  return(
    <ModalBody style={props.isOpenModal ? {opacity: 1, visibility: "visible"} : {opacity: 0, visibility: "hidden"}} onClick={event => event.target === event.currentTarget ? props.closeModal() : ""}>
      <ModalContent>
        {props.children}
      </ModalContent>
    </ModalBody>
  );
}

export default Modal;