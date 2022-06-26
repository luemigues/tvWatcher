import styled from "styled-components";
import { styles } from "../../utils/defaultStyles";
import { Close } from "@styled-icons/ionicons-outline/Close";

export const Backdrop = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: ${styles.colors.border};
  opacity: 0.5;
  top: 0px;
  left: 0;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1%;
  width: 70%;
  height: 70%;
  position: absolute;
  top: 10%;

  border-bottom: 1px solid ${styles.colors.border};
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  backdrop-filter: blur(31px);
  -webkit-backdrop-filter: blur(31px);
  -webkit-box-shadow: -1px 1px 50px -4px rgba(0, 0, 0, 0.45);
  box-shadow: -1px 1px 50px -4px rgba(0, 0, 0, 0.45);
  border-radius: 2%;

  z-index: 150;
`;

export const ModalData = styled.div`
  display: block;
  flex-direction: column;
  align-content: space-between;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: 56px;
`;

export const CloseIcon = styled(Close)`
  color: ${styles.colors.dark};
  width: 20px;
  align-self: flex-end;
  justify-self: flex-end;
`;
