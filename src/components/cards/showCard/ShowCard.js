import React from "react";
import {
  Container,
  Details,
  Info,
  Rating,
  Title,
  FavIconWrapper,
  TopShading,
} from "./ShowCard-styles";
import { FavoriteBorder, Favorite } from "@styled-icons/material";

function ShowCard(props) {
  return (
    <Container {...props} onClick={(e) => props.handleOnClick(e, props.show.id)}>
      <TopShading>
        <FavIconWrapper name="favIcon" onClick={() => props.handleFavorite(props.show.id)}>
          {props.fav ? <Favorite /> : <FavoriteBorder />}
        </FavIconWrapper>
      </TopShading>
      <Details>
        <Info>
          <Title>{props.show.name}</Title>
        </Info>
        <Rating>{props.show.rating.avarage}</Rating>
      </Details>
    </Container>
  );
}

export default ShowCard;
