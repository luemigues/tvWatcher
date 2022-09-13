import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
`;

export const SectionTitle = styled.h1`
  font-size: ${(props) =>
    props.secondary ? styles.fontSize.reg : styles.fontSize.reg};
  font-weight: ${(props) =>
    props.secondary ? styles.fontWeight.reg : styles.fontWeight.bold};
  font-family: ${styles.fontFam};
  color: ${styles.colors.main};
  text-align: ${(props) => (props.alignText ? props.alignText : "center")};
  margin: 20px 10px;
  padding: 5px 0px;
  border-bottom: 3px solid ${styles.colors.secondary};
`;