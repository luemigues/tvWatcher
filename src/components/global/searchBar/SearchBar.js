import React, { useState } from "react";
import { Container, Input, SearchIcon } from "./SearchBar-styles";

function SearchBar(props) {
  let [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  let handleSearch = () => {
    if (text !== "") {
      props.handleChange(text);
    }
  };

  return (
    <Container {...props}>
      <Input onKeyDown={handleKeyDown} onChange={handleChange} />
      <SearchIcon onClick={handleSearch} />
    </Container>
  );
}

export default SearchBar;
