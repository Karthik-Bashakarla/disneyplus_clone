import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import {
  MovieContainer,
  Movie,
  MovieList,
  Title,
} from "../../styles/home/Movies";

const api_key = process.env.REACT_APP_API_KEY;

const Movies = ({ title }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([{}]);
  useEffect(() => {
    async function getMovies() {
      switch (title) {
        case "Top Rated":
          const topRated = await axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1&region=IN`
          );
          const topRatedArr = await topRated.data.results;
          setMovies(topRatedArr);
          break;
        case "Anime":
          const anime = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_providers=8&watch_region=JP&with_watch_monetization_types=flatrate`
          );
          const animeArr = await anime.data.results;
          setMovies(animeArr);
          break;
        case "Popular":
          const popular = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
          );
          const popularArr = await popular.data.results;
          setMovies(popularArr);
          break;
        case "War":
          const thriller = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752&with_watch_providers=122&watch_region=IN&with_watch_monetization_types=flatrate`
          );
          const thrillerArr = await thriller.data.results;
          setMovies(thrillerArr.slice(0, thrillerArr.length - 1));
          break;
        case "Comedy":
          const comedy = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_providers=337&watch_region=US&with_watch_monetization_types=flatrate`
          );
          const comedyArr = await comedy.data.results;
          setMovies(comedyArr);
          break;
        default:
          console.log("no title");
      }
    }
    getMovies();
  }, [title]);

  // console.log(
  //   title,
  //   movies.map((movie) => movie.poster_path)
  // );

  return (
    <MovieContainer>
      <Title>{title}</Title>
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
    </MovieContainer>
  );
};

export default React.memo(Movies);
