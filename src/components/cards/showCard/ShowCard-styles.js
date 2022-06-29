import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const Container = styled.div`
  
  height: 14rem;
  width: 10rem;
  margin: 1%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${styles.fontSize.mid};
  font-weight: ${styles.fontWeight.light};
  font-family: ${styles.fontFam};
  color: ${styles.colors.alter};
  min-width: fit-content;
  line-height: ${styles.fontSize.par};
`;

export const Title = styled.h2`
  font-size: ${styles.fontSize.par};
  font-weight: ${styles.fontWeight.reg};
  font-family: ${styles.fontFam};
  color: ${styles.colors.alter};
  margin: 0px;
  line-height: ${styles.fontSize.par};
  text-align: left;
  max-width: 60%;
`;

export const FavIconWrapper = styled.div`
  width: fit-content;
  float: right;

  ${StyledIconBase} {
    height: 27px;
    width: 27px;
    margin: 7px;
    color: ${styles.colors.alter};
    webkit-filter: drop-shadow(1px 7px 19px #000);
    filter: drop-shadow(1px 7px 19px #000);
  }
`;
