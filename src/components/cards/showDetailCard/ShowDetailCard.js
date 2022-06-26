import React from "react";
import {
  ImageContainer,
  Shadow,
  DetailsContainer,
  Rating,
  Title,
  MainInfoContainer,
  Year,
  Summary,
  Aired,
  Image,
  TagContainer,
  EpisodesContainer,
  Episode,
} from "./ShowDetailCard-styles";
import GenreTag from "../../global/genreTag/GenreTag";
import EpisodeCard from "../episodeCard/EpisodeCard";

function ShowDetailCard(props) {
  let show = props.show.show;

  return (
    <>
      <MainInfoContainer>
        <ImageContainer {...props}>
          <Image src={show.image.medium} />
          <Shadow>
            <Rating>{show.rating.average && `★ ${show.rating.average}`}</Rating>
          </Shadow>
        </ImageContainer>
        <DetailsContainer>
          <Title>{show.name}</Title>
          <Year>{show.premiered.split("-")[0]}</Year>
          <Summary>
            {show.summary.replace("<p>", "").replace("</p>", "")}
          </Summary>
          <Aired>{show.network && show.network.name}</Aired>
          {show.genres && (
            <TagContainer>
              {show.genres.map((genre) => {
                return <GenreTag key={genre} text={genre} />;
              })}
            </TagContainer>
          )}
        </DetailsContainer>
      </MainInfoContainer>
      <EpisodesContainer>
        {props.prevEpisode && (
          <Episode>
            <EpisodeCard title="Previous episode" episode={props.prevEpisode} />
          </Episode>
        )}
      </EpisodesContainer>
    </>
  );
}

export default ShowDetailCard;
