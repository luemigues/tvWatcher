import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";

export const MainInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 100%;
  flex-wrap: wrap;
  padding: 1%;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  position: inherit;
  margin-bottom: 20px;
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
  max-width: 60%;
  text-align: left;
  padding: 0% 5%;

  @media (max-width: 900px) {
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
  margin-top: 0px;
`;

export const Summary = styled.p`
  font-size: ${styles.fontSize.small};
  font-weight: ${styles.fontWeight.reg};
  font-family: ${styles.fontFam};
  color: ${styles.colors.dark};
  overflow-wrap: break-word;
  max-width: 100%;
`;

export const MoreInfo = styled.div`
  font-size: ${styles.fontSize.mid};
  font-weight: ${styles.fontWeight.light};
  font-family: ${styles.fontFam};
  color: ${styles.colors.dark};
  line-height: ${styles.fontSize.par};
  margin: 0px;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: ${styles.fontSize.small};
  height: min-content;
  flex-wrap: wrap;

  @media (max-width: 990px) {
    justify-content: center;
    align-items: center;
  }
`;

export const EpisodesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 1%;
  margin-top: 20px;
  border-top: 1px solid ${styles.colors.border};

  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Episode = styled.div`
  min-width: fit-content;
  width: 30%;
  margin: 1%;
  max-width: 50%;
`;

export const FavoriteTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${styles.fontSize.small};
  font-weight: ${styles.fontWeight.bold};
  font-family: ${styles.fontFam};
  color: ${styles.colors.secondary};
  background-color: ${styles.colors.alter};
  text-align: left;
  width: 10%;
  min-width: fit-content;
  flex-wrap: wrap;
  padding: 0.5em 2em;
  box-sizing: border-box;
  margin: 0px;
  margin-bottom: 15px;
  border-radius: 10px 100px / 120px;
`;
