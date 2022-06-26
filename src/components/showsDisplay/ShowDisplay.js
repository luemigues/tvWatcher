import React, { useState } from "react";
import { Container } from "./ShowDisplay-styles";
import ShowCard from "../cards/showCard/ShowCard";
import ShowModal from "../showModal/ShowModal";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favorite.slice";

function ShowDisplay(props) {
  const [openModal, setOpenModal] = useState(false);
  const favorites = useSelector((state) => state.favorites.value);
  const dispatch = useDispatch();

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
      setOpenModal(true);
    }
  };

  let toggleModal = () => {
    setOpenModal((prevState) => !prevState);
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
        <ShowModal toggleModal={toggleModal}>
        </ShowModal>
      )}
    </Container>
  );
}

export default ShowDisplay;
