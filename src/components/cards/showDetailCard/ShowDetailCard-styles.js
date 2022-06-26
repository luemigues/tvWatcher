import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";
import { StyledIconBase } from "@styled-icons/styled-icon";

export const MainInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  margin: 1%;
  position: relative;
`;

export const Image = styled.img``;

export const Shadow = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: flex-end;
  justify-content: flex-end;
  max-width: 100%;
  min-width: 100%;
  min-height: 40%;
  padding: 15px 8px;
  background-image: linear-gradient(
    to bottom,
    rgb(27, 26, 23, 0),
    rgb(27, 26, 23, 1)
  );
  position: absolute;
  botton: 0px;
  left: 0px;
`;

export const Rating = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${styles.fontSize.big};
  font-weight: ${styles.fontWeight.light};
  font-family: ${styles.fontFam};
  color: ${styles.colors.alter};
  line-height: ${styles.fontSize.par};
  margin: 3px;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 1%;
`;

export const Title = styled.h2`
  font-size: ${styles.fontSize.big};
  font-weight: ${styles.fontWeight.bold};
  font-family: ${styles.fontFam};
  color: ${styles.colors.dark};
  line-height: ${styles.fontSize.par};
  text-align: left;
`;

export const Year = styled.p`
  font-size: ${styles.fontSize.mid};
  font-weight: ${styles.fontWeight.light};
  font-family: ${styles.fontFam};
  color: ${styles.colors.dark};
  line-height: ${styles.fontSize.par};
  text-align: left;
  margin: 0px;
`;

export const Summary = styled.p`
  font-size: ${styles.fontSize.reg};
  font-weight: ${styles.fontWeight.reg};
  font-family: ${styles.fontFam};
  color: ${styles.colors.dark};
  text-align: left;
`;

export const Aired = styled.p`
  font-size: ${styles.fontSize.par};
  font-weight: ${styles.fontWeight.bold};
  font-family: ${styles.fontFam};
  color: ${styles.colors.secondary};
  text-align: left;
  margin: 0px;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2% 0%;
  font-size: ${styles.fontSize.small};
  height: min-content;
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

    @media (max-width: 990px) {
      height: 10px;
      width: 10px;
    }
  }
`;
