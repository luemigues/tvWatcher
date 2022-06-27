import React from "react";
import {
  ImageContainer,
  Shadow,
  DetailsContainer,
  Rating,
  Title,
  MainInfoContainer,
  Summary,
  Image,
  TagContainer,
  EpisodesContainer,
  Episode,
  FavoriteTag,
  MoreInfo,
} from "./ShowDetailCard-styles";
import GenreTag from "../../global/genreTag/GenreTag";
import EpisodeCard from "../episodeCard/EpisodeCard";

function ShowDetailCard(props) {
  let show = props.show.show;
  let year = show.premiered;
  let summary = show.summary;

  return (
    <>
      <MainInfoContainer>
        {show.image && (
          <ImageContainer {...props}>
            <Image src={show.image.medium} />
            <Shadow>
              <Rating>
                {show.rating.average && `★ ${show.rating.average}`}
              </Rating>
            </Shadow>
          </ImageContainer>
        )}
        <DetailsContainer>
          {props.fav && <FavoriteTag>Saved to favorites</FavoriteTag>}
          <Title>{show.name}</Title>
          <MoreInfo>
            {year && year.split("-")[0]}{" "}
            {show.network && `| ${show.network.name}`}
          </MoreInfo>
          {summary && (
            <Summary>{show.summary.replace(/<[^>]*>?/gm, "")}</Summary>
          )}
          {show.genres && (
            <TagContainer>
              {show.genres.map((genre) => {
                return <GenreTag key={genre} text={genre} />;
              })}
            </TagContainer>
          )}
        </DetailsContainer>
      </MainInfoContainer>
      {props.show.prevEpisode && (
        <EpisodesContainer>
          <Episode>
            <EpisodeCard
              title="Previous episode"
              episode={props.show.prevEpisode}
            />
          </Episode>
        </EpisodesContainer>
      )}
    </>
  );
}

export default ShowDetailCard;
