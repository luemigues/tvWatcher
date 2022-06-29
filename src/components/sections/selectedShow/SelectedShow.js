import React, { useEffect } from "react";
import {
  Navegation,
  BackText,
  BackIcon,
  ModalContainer,
  ModalData,
} from "./SelectedShow.-styles";
import { useSelector, useDispatch } from "react-redux";
import helpers from "../../../utils/helpers";
import { removeSelectedShow } from "../../../store/selectedShow.slice";
import ShowDetailCard from "../../cards/showDetailCard/ShowDetailCard";

function SelectedShow(props) {
  const favorites = useSelector((state) => state.favorites.value);
  const selectedShow = useSelector((state) => state.selectedShow.value);
  const dispatch = useDispatch();
  let isFavorite = helpers.isFavorite(favorites, selectedShow.show.id);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  let goBack = () => {
    dispatch(removeSelectedShow());
  };

  return (
    <>
      <ModalContainer>
        <Navegation onClick={goBack}>
          <BackIcon />
          <BackText>Back</BackText>
        </Navegation>
        <ModalData>
          <ShowDetailCard fav={isFavorite} show={selectedShow} />
        </ModalData>
      </ModalContainer>
    </>
  );
}

export default SelectedShow;
