import React from "react";
import {
  Container,
  SectionTitle,
  CoverContainer,
  VerticalDiv,
  SvgContainer,
} from "./SectionHeader-styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";

function SectionHeader(props) {
  let random = () => Math.floor(Math.random() * (4 - 1) + 1);

  return (
    <Container>
      <CoverContainer>
        {[...Array(30)].map((n, i) => {
          return (
            <VerticalDiv key={i}>
              {[...Array(random())].map((n, i) => {
                return (
                  <SvgContainer key={i}>
                    <Logo />
                  </SvgContainer>
                );
              })}
            </VerticalDiv>
          );
        })}
      </CoverContainer>
      <SectionTitle {...props}>{props.title}</SectionTitle>
    </Container>
  );
}

export default SectionHeader;
