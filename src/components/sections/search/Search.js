import React, { useState } from "react";
import { Container } from "./Search-styles";
import tvMaze from "../../../utils/resources";
import SectionHeader from "../../sectionHeader/SectionHeader";
import SearchBar from "../../global/searchBar/SearchBar";
import ShowDisplay from "../../showsDisplay/ShowDisplay";

function SearchSection(props) {
  let [showResults, setShowResults] = useState([]);

  let handleSearch = async (value) => {
    try {
      let search = await tvMaze.search(value);
      setShowResults(search);
    } catch (error) {
      setShowResults([]);
    }
  };

  return (
    <Container>
      <SectionHeader title="Dont miss out on any updates from your favorite shows" />
      <SearchBar handleChange={handleSearch} margin="40px" />
      {showResults.length > 0 && <ShowDisplay shows={showResults} />}
    </Container>
  );
}

export default SearchSection;
