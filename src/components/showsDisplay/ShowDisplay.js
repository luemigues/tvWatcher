import React, { useEffect } from "react";
import { Container } from "./ShowDisplay-styles";
import ShowCard from "../cards/showCard/ShowCard";
import SelectedShow from "../sections/selectedShow/SelectedShow";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favorite.slice";
import { selectShow, addPrevEpisode } from "../../store/selectedShow.slice";
import tvMaze from "../../utils/resources";
import helpers from "../../utils/helpers";

function ShowDisplay(props) {
  const favorites = useSelector((state) => state.favorites.value);
  const selectedShow = useSelector((state) => state.selectedShow);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedShow.value.show) {
      let loadPrevEpisode = async () => {
        let url = selectedShow.value.show._links.previousepisode;
        if (url) {
          let splitUrl =
            selectedShow.value.show._links.previousepisode.href.split("/");
          let episodeId = splitUrl[splitUrl.length - 1];

          let episode = await tvMaze.getEpisode(episodeId);

          dispatch(addPrevEpisode(episode));
        }
      };

      loadPrevEpisode();
    }
  });

  let handleFavorite = (id) => {
    let showIndex = props.shows.findIndex((show) => show.show.id === id);

    if (showIndex > -1) {
      if (helpers.isFavorite(favorites, id))
        dispatch(removeFavorite(props.shows[showIndex]));
      else dispatch(addFavorite(props.shows[showIndex]));
    }
  };

  let handleOnClick = (e, id) => {
    if (
      e.target.parentElement.getAttribute("name") !== "favIcon" &&
      e.target.getAttribute("name") !== "favIcon"
    ) {
      let showIndex = props.shows.findIndex((show) => show.show.id === id);
      if (showIndex > -1) dispatch(selectShow(props.shows[showIndex]));
    }
  };

  return (
    <Container>
      {selectedShow.isSelected && <SelectedShow />}

      {props.shows.map((show) => {
        let isFav = helpers.isFavorite(favorites, show.show.id);

        return (
          <ShowCard
            fav={isFav}
            key={show.show.id}
            data-index={show.show.id}
            show={show.show}
            handleFavorite={handleFavorite}
            handleOnClick={handleOnClick}
          />
        );
      })}
    </Container>
  );
}

export default ShowDisplay;
