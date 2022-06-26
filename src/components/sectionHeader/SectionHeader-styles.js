import styled from "styled-components";
import { styles } from "../../utils/defaultStyles";

export const Container = styled.div``;

export const CoverImage = styled.img`
  width: 100%;
  margin-top: 15px;
  display: ${(props) => props.cover === false && "none"};
`;

export const SectionTitle = styled.h1`
  font-size: ${(props) =>
    props.secondary ? styles.fontSize.reg : styles.fontSize.big};
  font-weight: ${(props) =>
    props.secondary ? styles.fontWeight.reg : styles.fontWeight.bold};
  font-family: ${styles.fontFam};
  color: ${styles.colors.dark};
  text-align: ${(props) => (props.alignText ? props.alignText : "center")};
  margin: 0px 30px;
  margin-top: ${(props) => props.cover === false && "76px"};
`;
