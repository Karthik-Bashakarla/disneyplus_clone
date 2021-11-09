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
      <Movies />
    </HomeContainer>
  );
};

export default Home;
