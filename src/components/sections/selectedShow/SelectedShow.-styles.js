import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 70px 10%;
  padding-bottom: 0px;
  height: 100%;
  width: 100vw;
  position: fixed;
  top: 0px;
  overflow: scroll;

  border-bottom: 1px solid ${styles.colors.border};
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  backdrop-filter: blur(31px);
  -webkit-backdrop-filter: blur(31px);
  -webkit-box-shadow: -1px 1px 50px -4px rgba(0, 0, 0, 0.45);
  box-shadow: -1px 1px 50px -4px rgba(0, 0, 0, 0.45);
  border-radius: 2%/3%;
  box-sizing: border-box;

  z-index: 150;
`;

export const ModalData = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`;

export const Navegation = styled.div`
  color: ${styles.colors.dark};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 5px;
  ,
`;

export const BackText = styled.div`
  color: ${styles.colors.dark};
  width: 20px;
  align-self: flex-start;
  justify-self: flex-start;
  font-size: ${styles.fontSize.reg};
  font-weight: ${styles.fontWeight.bold};
  font-family: ${styles.fontFam};
  color: ${styles.colors.main};
`;

export const BackIcon = styled(ArrowIosBackOutline)`
  color: ${styles.colors.main};
  width: 20px;
  margin-right: 5px;
`;
