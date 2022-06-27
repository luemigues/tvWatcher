import React from "react";
import {
  EpisodeContainer,
  Header,
  EpisodeDetails,
  Date,
  EpisodeInfo,
} from "./EpisodeCard-styles";
import helpers from "../../../utils/helpers";

function EpisodeCard(props) {
  let date = helpers.formatDate(props.episode.airdate);
  let season = props.episode.season && `S${props.episode.season}`;
  let epidode = props.episode.number && `E${props.episode.number}`;

  return (
    <EpisodeContainer>
      <Header>{props.title}</Header>
      <EpisodeDetails>
        <EpisodeInfo>
          {season} {epidode} - {props.episode.name}
        </EpisodeInfo>
        <Date>Airedate: {date}</Date>
      </EpisodeDetails>
    </EpisodeContainer>
  );
}

export default EpisodeCard;
