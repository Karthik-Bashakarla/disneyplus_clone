import React from "react";
import Carousel from "./Carousel";
import Brands from "./Brands";
import Movies from "./Movies";
import { HomeContainer } from "../../styles/home/Home";

const Home = () => {
  return (
    <HomeContainer>
      <Carousel />
      <Brands />
      <Movies title="Top rated" />
      <Movies title="Anime" />
      <Movies title="Thriller" />
      <Movies title="Comedy" />
    </HomeContainer>
  );
};

export default Home;
