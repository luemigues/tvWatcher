import React, { useEffect, useState } from "react";
import { Container } from "./ShowDisplay-styles";
import ShowCard from "../cards/showCard/ShowCard";
import ShowModal from "../showModal/ShowModal";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favorite.slice";
import {
  selectShow,
  removeSelectedShow,
  addPrevEpisode,
} from "../../store/selectedShow.slice";
import ShowDetailCard from "../cards/showDetailCard/ShowDetailCard";
import tvMaze from "../../utils/resources";

function ShowDisplay(props) {
  const [openModal, setOpenModal] = useState(false);
  const favorites = useSelector((state) => state.favorites.value);
  const selectedShow = useSelector((state) => state.selectedShow.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedShow.show) {
      let loadPrevEpisode = async () => {
        let url = selectedShow.show._links.previousepisode;
        if (url) {
          let splitUrl =
            selectedShow.show._links.previousepisode.href.split("/");
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
      if (isFavorite(id)) dispatch(removeFavorite(props.shows[showIndex]));
      else dispatch(addFavorite(props.shows[showIndex]));
    }
  };

  let handleOnClick = (e, id) => {
    console.log(e);

    if (
      e.target.parentElement.getAttribute("name") !== "favIcon" &&
      e.target.getAttribute("name") !== "favIcon"
    ) {
      let showIndex = props.shows.findIndex((show) => show.show.id === id);
      if (showIndex > -1) dispatch(selectShow(props.shows[showIndex]));

      setOpenModal(true);
    }
  };

  let closeModal = () => {
    setOpenModal(false);
    dispatch(removeSelectedShow());
  };

  let isFavorite = (id) => {
    return favorites.findIndex((favShow) => favShow.show.id === id) > -1;
  };

  return (
    <Container>
      {openModal && (
        <ShowModal toggleModal={closeModal}>
          <ShowDetailCard
            fav={isFavorite(selectedShow.show.id)}
            show={selectedShow}
          />
        </ShowModal>
      )}

      {props.shows.map((show) => {
        let isFav = isFavorite(show.show.id);

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
