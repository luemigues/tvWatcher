import React, { useState } from "react";
import { Container, ResultText } from "./Search-styles";
import tvMaze from "../../../utils/resources";
import SectionHeader from "../../sectionHeader/SectionHeader";
import SearchBar from "../../global/searchBar/SearchBar";
import ShowDisplay from "../../showsDisplay/ShowDisplay";

function SearchSection(props) {
  
  let [showResults, setShowResults] = useState([]);
  let [searchText, setSearchText] = useState("");

  let getText = () => {
    let text;
    if (showResults.length > 0) text = `showing results for "${searchText}"`;
    else if (showResults.length === 0 && searchText !== "")
      text = `No shows found for "${searchText}". Try another search term.`;
    else text = "";

    return text;
  };

  let handleSearch = async (value) => {
    try {
      let search = await tvMaze.search(value);
      setSearchText(value);
      setShowResults(search);
    } catch (error) {
      setShowResults([]);
    }
  };

  return (
    <Container>
      <SectionHeader title="Don't miss out on any updates from your favorite shows" />
      <SearchBar handleSearch={handleSearch} margin="5px" />
      <ResultText>{getText()}</ResultText>
      <ShowDisplay shows={showResults} />
    </Container>
  );
}

export default SearchSection;
