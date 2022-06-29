import React from "react";
import {
  Container,
  Details,
  TopShading,
  Opacity,
} from "./ShowBackground-style";

function ShowBackground(props) {
  return (
    <Container
      {...props}
      onClick={(e) => props.handleOnClick && props.handleOnClick(e, props.show.id)}
    >
      <Opacity opacity={props.opacity}>
        <TopShading>{props.header}</TopShading>
        <Details>{props.details}</Details>
      </Opacity>
    </Container>
  );
}

export default ShowBackground;
