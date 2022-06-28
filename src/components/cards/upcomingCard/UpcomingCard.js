import React from "react";
import {
  EpisodeContainer,
  Header,
  EpisodeDetails,
  Date,
  EpisodeInfo,
  ImageContainer,
  Image,
} from "./UpcomingCard-styles";
import defaultImg from "../../../assets/logo512.png"

function UpcomingCard({episode}) {


  return (
    <EpisodeContainer>
      <ImageContainer>
        <Image src={episode.image ? episode.image.medium : defaultImg} />
      </ImageContainer>
      <Header>{episode.title}</Header>
      <EpisodeDetails>
        <EpisodeInfo>{episode.name}</EpisodeInfo>
        <Date></Date>
      </EpisodeDetails>
    </EpisodeContainer>
  );
}

export default UpcomingCard;
