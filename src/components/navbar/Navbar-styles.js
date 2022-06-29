import styled from "styled-components";
import { styles } from "../../utils/defaultStyles";

export const Header = styled.header`
  height: 56px;
  width: 100%;
  max-width: 100vw;
  padding: 0px 20px;
  position: fixed;
  box-sizing: border-box;

  border: 1px solid ${styles.colors.border};
  background: #ffffff 0% 0% no-repeat padding-box;

  backdrop-filter: blur(31px);
  -webkit-backdrop-filter: blur(31px);

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 200;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: flex-end;
  width: fit-content;
`;
