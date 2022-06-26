import React from "react";
import { Container } from "./GenreTag-style";

function GenreTag(props) {
  return (
    <Container>
      {props.text}
    </Container>
  );
}

export default GenreTag;
