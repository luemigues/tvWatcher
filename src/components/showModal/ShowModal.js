import React, { useEffect } from "react";
import {
  Backdrop,
  ModalContainer,
  CloseIcon,
  ModalData,
} from "./ShowModal-styles";

function ShowModal(props) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  let closeModal = () => {
    props.toggleModal();
  };

  return (
    <>
      <ModalContainer>
        <CloseIcon onClick={closeModal} />
        <ModalData>{props.children}</ModalData>
      </ModalContainer>
      <Backdrop onClick={closeModal} />
    </>
  );
}

export default ShowModal;
