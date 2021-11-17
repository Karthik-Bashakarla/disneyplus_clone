import styled from "styled-components";

export const MovieContainer = styled.div`
  border: 2px solid red;
  font-family: "Roboto", "HelveticaNeue-Light", sans-serif;
  padding: 0 2.5rem;
`;

export const Title = styled.div`
  border: 2px solid red;
  margin: 1rem 0;
  color: #fff;
  font-size: 1.2rem;
  letter-spacing: 0.125rem;
`;

export const MovieList = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
`;

export const Movie = styled.div`
  min-width: 12rem;
  height: 14rem;
  background-color: lightblue;
  border-radius: 0.2rem;
  margin: 0 1rem 2rem 0;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    // position: absolute;
    // top: 0;
    // bottom: 0;
    // right: 0;
    // left: 0;
    // object-fit: contain;
  }
`;
