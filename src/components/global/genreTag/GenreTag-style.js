import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  background-color: ${styles.colors.secondary};
  border: 1px solid ${styles.colors.secondary};
  border-radius: 25%/100%;
  margin: 1em 0em;
  margin-right: 1em;
  padding: .75em 3em;

  font-size: inherit;
  font-weight: ${styles.fontWeight.reg};
  font-family: ${styles.fontFam};
  color: ${styles.colors.alter};
`;
