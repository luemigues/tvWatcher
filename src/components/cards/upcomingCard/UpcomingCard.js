import React from "react";
import {
  EpisodeContainer,
  Header,
  EpisodeDetails,
  Date,
  Time,
  EpisodeInfo,
  ImageContainer,
  Image,
  CalendarIcon,
  Title,
  Number,
  Summary,
} from "./UpcomingCard-styles";
import defaultImg from "../../../assets/logo512.png";
import helpers from "../../../utils/helpers";
import CardBackground from "../../global/showBackground/ShowBackground";

function UpcomingCard({ episode }) {
  let showInfo = episode._embedded.show;
  let season = episode.season && `S${episode.season}`;
  let epidode = episode.number && `E${episode.number}`;

  let header = (
    <Header>
      <CalendarIcon />
      <Date>{helpers.formatDate(episode.airdate)}</Date>
      <Time>{helpers.getTime(episode.airdate)}</Time>
    </Header>
  );

  let details = (
    <EpisodeInfo>
      <Title>{episode.name}</Title>
      <Number>
        {season} {epidode}
      </Number>
    </EpisodeInfo>
  );

  return (
    <EpisodeContainer>
      <CardBackground
        header={header}
        details={details}
        image={showInfo.image}
        opacity="0.4"
      />
    </EpisodeContainer>
  );
}

export default UpcomingCard;
