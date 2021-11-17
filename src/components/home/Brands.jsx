import React from "react";
import { BrandsContainer, Brand } from "../../styles/home/Brands";

const Brands = () => {
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
    <BrandsContainer>
      {brandsList.map((brand) => (
        <Brand>
          <img src={brand.image} alt={brand.text} />
          <video autoPlay={true} loop={true}>
            <source src={brand.video} type="video/mp4" />
          </video>
        </Brand>
      ))}
    </BrandsContainer>
  );
};

export default Brands;
