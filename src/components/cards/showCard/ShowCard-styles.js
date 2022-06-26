import styled from "styled-components";
import { styles } from "../../../utils/defaultStyles";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { FavoriteBorder, Favorite } from "@styled-icons/material";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  height: 14rem;
  width: 10rem;
  background: no-repeat;
  background-image: url(${(props) =>
    props.show.image && props.show.image.medium});
  background-color: rgb(27, 26, 23, 0.5);
  background-size: contain;
  margin: 1%;
`;

export const Details = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 100%;
  min-width: 100%;
  min-height: 40%;
  padding: 15px 8px;
  background-image: linear-gradient(
    to bottom,
    rgb(27, 26, 23, 0),
    rgb(27, 26, 23, 1)
  );
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
  font-size: ${styles.fontSize.reg};
  font-weight: ${styles.fontWeight.light};
  font-family: ${styles.fontFam};
  color: ${styles.colors.alter};
  margin: 0px;
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
  max-width: 75%;
`;

export const Year = styled.p`
  font-size: ${styles.fontSize.par};
  font-weight: ${styles.fontWeight.light};
  font-family: ${styles.fontFam};
  color: ${styles.colors.alter};
  display: inline;
  margin-block-start: unset;
  margin-block-end: unset;
  margin: 0px;
`;

export const TopShading = styled.div`
  background-image: linear-gradient(
    to top,
    rgb(27, 26, 23, 0),
    rgb(27, 26, 23, 0.5)
  );
  width: 100%;
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

export const FavUnsaved = styled(FavoriteBorder)``;

export const FavSaved = styled(Favorite)``;
