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
      {props.fav ? (
        <Favorite name="favIcon" />
      ) : (
        <FavoriteBorder name="favIcon" />
      )}
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
    <Container onClick={(e) => props.handleOnClick(e, props.show.id)}>
      <CardBackground
        header={header}
        details={details}
        image={props.show.image}
      />
    </Container>
  );
}

export default ShowCard;
