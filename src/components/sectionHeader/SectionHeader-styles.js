import styled from "styled-components";
import { styles } from "../../utils/defaultStyles";

export const Container = styled.div`
  max-width: 100vw;
  overflow: hidden;
`;

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
  margin: 20px 30px;
  padding: 10px;
  margin-top: ${(props) => props.cover === false && "76px"};
`;

export const CoverContainer = styled.div`
  display: flex;
  max-height: 30px;
  width: 100%;
  justify-content: space-around;
  margin: 45px 0px;
  box-sizing: border-box;
  overflox: hidden;
  visibility: ${(props) => props.hideCover === true && "hidden"};
`;

export const VerticalDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100%;
`;

export const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 30%;
  min-width: 30px;
  opacity: 0.3;
  padding: 5px;
`;
