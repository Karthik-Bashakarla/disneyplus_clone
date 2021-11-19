import React from "react";
import Carousel from "./Carousel";
import Brands from "./Brands";
import Movies from "./Movies";
import { HomeContainer } from "../../styles/home/Home";

const Home = () => {
  const brandsList = [
    {
      image: "./assets/images/viewers-disney.png",
      text: "disney",
      video: "./assets/videos/disney.mp4",
    },
    {
      image: "./assets/images/viewers-marvel.png",
      text: "marvel",
      video: "./assets/videos/marvel.mp4",
    },
    {
      image: "./assets/images/viewers-star.png",
      text: "star",
      video: "./assets/videos/star.mp4",
    },
    {
      image: "./assets/images/viewers-pixar.png",
      text: "pixar",
      video: "./assets/videos/pixar.mp4",
    },
    {
      image: "./assets/images/viewers-national.png",
      text: "national",
      video: "./assets/videos/natgeo.mp4",
    },
    {
      image: "./assets/images/viewers-starwars.png",
      text: "starwars",
      video: "./assets/videos/starwars.mp4",
    },
  ];
  return (
    <HomeContainer>
      <Carousel />
      <Brands brandsList={brandsList} />
      <Movies title="Top rated" />
      <Movies title="Anime" />
      <Movies title="Thriller" />
      <Movies title="Comedy" />
    </HomeContainer>
  );
};

export default Home;
