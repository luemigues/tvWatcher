import React from "react";
import {
  Container,
  Info,
  Rating,
  Title,
  FavIconWrapper,
} from "./ShowCard-styles";
import { FavoriteBorder, Favorite } from "@styled-icons/material";
import CardBackground from "../../global/showBackground/ShowBackground";

function ShowCard(props) {
  let header = (
    <FavIconWrapper
      name="favIcon"
      onClick={() => props.handleFavorite(props.show.id)}
    >
      {props.fav ? <Favorite /> : <FavoriteBorder />}
    </FavIconWrapper>
  );

  let details = (
    <>
      <Info>
        <Title>{props.show.name}</Title>
      </Info>
      <Rating>
        {props.show.rating.average && `★ ${props.show.rating.average}`}
      </Rating>
    </>
  );

  return (
    <Container>
      <CardBackground
        handleOnClick={props.handleOnClick}
        header={header}
        details={details}
        image={props.show.image}
      />
    </Container>
  );
}

export default ShowCard;
