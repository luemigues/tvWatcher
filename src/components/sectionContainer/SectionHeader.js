import React from "react";
import { Container, CoverImage, SectionTitle } from "./SectionHeader-styles";
import coverImage from "../../assets/cover.png";

function SectionHeader(props) {
  return (
    <Container>
      <CoverImage src={coverImage} {...props} alt="cover with tv graphics" />;
      <SectionTitle {...props}>{props.title}</SectionTitle>
    </Container>
  );
}

export default SectionHeader;
