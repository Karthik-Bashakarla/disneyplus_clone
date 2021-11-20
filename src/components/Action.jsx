import axios from "axios";
import React, { useEffect, useState } from "react";
import { ActionContainer, Movie, MovieList, Title } from "../styles/Action";

const Action = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const api_key = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    async function getMovies() {
      const topRated = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1&region=IN`
      );
      const topRatedArr = await topRated.data.results;
      setMovies(topRatedArr);
    }
    getMovies();
  }, []);

  return (
    <ActionContainer>
      <Title>Action & Adventure</Title>
      <MovieList>
        {movies?.map((movie, index) => {
          return (
            <Movie key={index}>
              <img
                src={`${imageBaseUrl}${movie.poster_path}`}
                alt={movie.title}
              />
            </Movie>
          );
        })}
      </MovieList>
    </ActionContainer>
  );
};

export default React.memo(Action);
