import axios from "axios";
import React, { useEffect, useState } from "react";
import { ComedyContainer, Movie, MovieList, Title } from "../styles/Comedy";

const Comedy = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const api_key = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    async function getMovies() {
      const comedy = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_providers=337&watch_region=US&with_watch_monetization_types=flatrate`
      );
      const comedyArr = await comedy.data.results;
      setMovies(comedyArr);
    }
    getMovies();
  }, []);

  return (
    <ComedyContainer>
      <Title>Comedy</Title>
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
    </ComedyContainer>
  );
};

export default React.memo(Comedy);
