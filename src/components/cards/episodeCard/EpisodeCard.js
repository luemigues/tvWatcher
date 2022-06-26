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

  return (
    <EpisodeContainer>
      <Header>{props.title}</Header>
      <EpisodeDetails>
        <EpisodeInfo>
          {props.episode.name} - {props.episode.season}X{props.episode.number}
        </EpisodeInfo>
        <Date>Airedate: {date}</Date>
      </EpisodeDetails>
    </EpisodeContainer>
  );
}

export default EpisodeCard;
