import React from "react";
import { Container, ResultText } from "./Favorites-styles";
import SectionHeader from "../../sectionHeader/SectionHeader";
import ShowDisplay from "../../showsDisplay/ShowDisplay";
import { useSelector } from "react-redux";

function FavoritesSection(props) {
  const favorites = useSelector((state) => state.favorites.value);

  return (
    <Container>
      <SectionHeader title="All your favorite shows in one place" />
      {favorites.length === 0 && (
        <ResultText>
          Don't miss any updates, search and add your favorite shows
        </ResultText>
      )}
      <ShowDisplay shows={favorites} />
    </Container>
  );
}

export default FavoritesSection;
