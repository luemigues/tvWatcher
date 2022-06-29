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
import CardBackground from "../../global/showBackground/ShowBackground";
import { Retroarch } from "styled-icons/simple-icons";

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
    <CardBackground
      handleOnClick={props.handleOnClick}
      header={header}
      details={details}
      image={props.show.image}
    />
  );
}

export default ShowCard;
