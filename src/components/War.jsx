import axios from "axios";
import React, { useEffect, useState } from "react";
import { WarContainer, Movie, MovieList, Title } from "../styles/War";

const War = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const api_key = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    async function getMovies() {
      const war = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752&with_watch_providers=122&watch_region=IN&with_watch_monetization_types=flatrate`
      );
      const warArr = await war.data.results;
      setMovies(warArr);
    }
    getMovies();
  }, []);

  return (
    <WarContainer>
      <Title>War</Title>
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
    </WarContainer>
  );
};

export default React.memo(War);
