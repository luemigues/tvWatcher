import React, { useEffect, useState } from "react";
import { Container } from "./ShowDisplay-styles";
import ShowCard from "../cards/showCard/ShowCard";
import ShowModal from "../showModal/ShowModal";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favorite.slice";
import { selectShow, removeSelectedShow } from "../../store/selectedShow.slice";
import ShowDetailCard from "../cards/showDetailCard/ShowDetailCard";
import tvMaze from "../../utils/resources";

function ShowDisplay(props) {
  const [openModal, setOpenModal] = useState(false);
  const [prevEpisode, setPrevEpisode] = useState({});
  const favorites = useSelector((state) => state.favorites.value);
  const selectedShow = useSelector((state) => state.selectedShow.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedShow.show) {
      let loadPrevEpisode = async () => {
        let splitUrl = selectedShow.show._links.previousepisode.href.split("/");
        let episodeId = splitUrl[splitUrl.length - 1];

        let episode = await tvMaze.getEpisode(episodeId);

        setPrevEpisode(episode);
      };

      loadPrevEpisode();
    }
  });

  let handleFavorite = (id) => {
    let isFav = favorites.findIndex((favShow) => favShow.show.id === id) > -1;
    let showIndex = props.shows.findIndex((show) => show.show.id === id);

    if (showIndex > -1) {
      if (isFav) dispatch(removeFavorite(props.shows[showIndex]));
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

      setOpenModal(true);
    }
  };

  let closeModal = () => {
    setOpenModal(false);
    dispatch(removeSelectedShow());
    setPrevEpisode({});
  };

  return (
    <Container>
      {props.shows.map((show) => {
        let isFav =
          favorites.findIndex((favShow) => favShow.show.id === show.show.id) >
          -1;

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

      {openModal && (
        <ShowModal toggleModal={closeModal}>
          <ShowDetailCard show={selectedShow} prevEpisode={prevEpisode} />
        </ShowModal>
      )}
    </Container>
  );
}

export default ShowDisplay;
