import axios from "axios";
import React, { useEffect, useState } from "react";
import { AnimeContainer, Movie, MovieList, Title } from "../styles/Anime";

const Anime = () => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const api_key = process.env.REACT_APP_API_KEY;
  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    async function getMovies() {
      const anime = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_providers=8&watch_region=JP&with_watch_monetization_types=flatrate`
      );
      const animeArr = await anime.data.results;
      setMovies(animeArr);
    }
    getMovies();
  }, []);

  return (
    <AnimeContainer>
      <Title>Anime</Title>
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
    </AnimeContainer>
  );
};

export default React.memo(Anime);
