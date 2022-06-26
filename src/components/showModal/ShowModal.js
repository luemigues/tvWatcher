import React from "react";
import {
  Backdrop,
  ModalContainer,
  CloseIcon,
  ModalData,
} from "./ShowModal-styles";

function ShowModal(props) {
  let closeModal = () => {
    props.toggleModal();
  };

  return (
    <>
      <ModalContainer>
        <CloseIcon onClick={closeModal}/>
        <ModalData>{props.children}</ModalData>
      </ModalContainer>
      <Backdrop onClick={closeModal} />
    </>
  );
}

export default ShowModal;
