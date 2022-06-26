import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";

export const MainInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;
  padding: 0% 3%;
  position: relative;
  box-sizing: border-box;
`;

export const EpisodesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2% 3%;
`;

export const Episode = styled.div`
  width: 30%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  margin: 1% 3%;
  position: relative;
  flex-shrink: 1;
`;

export const Image = styled.img`
  object-fit: contain;
  width: 100%; /* or any custom size */
  height: 100%;
`;

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
  max-width: 60%;
  text-align: left;

  @media (max-width: 1120px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: ${styles.fontSize.big};
  font-weight: ${styles.fontWeight.bold};
  font-family: ${styles.fontFam};
  color: ${styles.colors.dark};
  line-height: ${styles.fontSize.par};
`;

export const Year = styled.p`
  font-size: ${styles.fontSize.mid};
  font-weight: ${styles.fontWeight.light};
  font-family: ${styles.fontFam};
  color: ${styles.colors.dark};
  line-height: ${styles.fontSize.par};
  margin: 0px;
`;

export const Summary = styled.p`
  font-size: ${styles.fontSize.reg};
  font-weight: ${styles.fontWeight.reg};
  font-family: ${styles.fontFam};
  color: ${styles.colors.dark};
  overflow-wrap: break-word;
  max-width: 100%;
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
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  margin: 3% 0%;
  font-size: ${styles.fontSize.small};
  height: min-content;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 990px) {
    justify-content: center;
    align-items: center;
  }
`;
