import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: no-repeat;
  background-image: url(${(props) => props.image && props.image.medium});
  background-color: rgb(27, 26, 23, 0.5);
  background-size: contain;
  height: 100%;
  width: 100%
  margin: 1%;
`;

export const Opacity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, ${(props) => props.opacity ? props.opacity : "0"});
`;

export const Details = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 100%;
  min-width: 100%;
  min-height: 40%;
  padding: 15px 8px;
  background-image: linear-gradient(
    to bottom,
    rgb(27, 26, 23, 0),
    rgb(27, 26, 23, 1)
  );

`;

export const TopShading = styled.div`
  background-image: linear-gradient(
    to top,
    rgb(27, 26, 23, 0),
    rgb(27, 26, 23, 1)
  );
  width: 100%;
`;
