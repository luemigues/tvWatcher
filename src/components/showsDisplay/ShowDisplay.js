import React from "react";
import { Container } from "./ShowDisplay-styles";

function ShowDisplay(props) {
  return (
    <Container>
      <ul>
        {props.shows.map((show) => {
         return <li key={show.show.id}>{show.show.name}</li>;
        })}
      </ul>
    </Container>
  );
}

export default ShowDisplay;
