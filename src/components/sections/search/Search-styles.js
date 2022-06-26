import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ResultText = styled.p`
  font-size: ${(props) =>
    props.secondary ? styles.fontSize.reg : styles.fontSize.reg};
  font-weight: ${(props) =>
    props.secondary ? styles.fontWeight.reg : styles.fontWeight.light};
  font-family: ${styles.fontFam};
  color: ${styles.colors.dark};
  text-align: center;
`;
