import React from "react";
import { BrandsContainer, Brand } from "../../styles/home/Brands";

const Brands = () => {
  const brandsList = [
    {
      image: "./assets/images/viewers-disney.png",
      text: "disney",
    },
    {
      image: "./assets/images/viewers-marvel.png",
      text: "marvel",
    },
    {
      image: "./assets/images/viewers-star.png",
      text: "star",
    },
    {
      image: "./assets/images/viewers-pixar.png",
      text: "pixar",
    },
    {
      image: "./assets/images/viewers-national.png",
      text: "national",
    },
    {
      image: "./assets/images/viewers-starwars.png",
      text: "starwars",
    },
  ];
  return (
    <BrandsContainer>
      {brandsList.map((brand) => (
        <Brand>
          <img src={brand.image} alt={brand.text} />
        </Brand>
      ))}
    </BrandsContainer>
  );
};

export default Brands;
