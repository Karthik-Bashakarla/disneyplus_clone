import React from "react";
import {
  MovieContainer,
  Movie,
  MovieList,
  Title,
} from "../../styles/home/Movies";

const Movies = ({ title }) => (
  <MovieContainer>
    <Title>{title}</Title>
    <MovieList>
      <Movie>
        <img src="./assets/images/LUCA-2.png" alt="luca" />
      </Movie>
      <Movie>
        <img src="./assets/images/LUCA-2.png" alt="luca" />
      </Movie>
      <Movie>
        <img src="./assets/images/LUCA-2.png" alt="luca" />
      </Movie>
      <Movie>
        <img src="./assets/images/LUCA-2.png" alt="luca" />
      </Movie>
      <Movie>
        <img src="./assets/images/LUCA-2.png" alt="luca" />
      </Movie>
      <Movie>
        <img src="./assets/images/LUCA-2.png" alt="luca" />
      </Movie>
      <Movie>
        <img src="./assets/images/LUCA-2.png" alt="luca" />
      </Movie>
      <Movie>
        <img src="./assets/images/LUCA-2.png" alt="luca" />
      </Movie>
      <Movie>
        <img src="./assets/images/LUCA-2.png" alt="luca" />
      </Movie>
    </MovieList>
  </MovieContainer>
);
export default React.memo(Movies);
