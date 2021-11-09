import React from "react";
import { BrandsContainer, Brand } from "../../styles/home/Brands";

const Brands = () => {
  return (
    <BrandsContainer>
      <Brand>
        <img src="./assets/images/viewers-disney.png" alt="disney" />
      </Brand>
      <Brand>
        <img src="./assets/images/viewers-marvel.png" alt="marvel" />
      </Brand>
      <Brand>
        <img src="./assets/images/viewers-national.png" alt="nationa" />
      </Brand>
      <Brand>
        <img src="./assets/images/viewers-star.png" alt="star" />
      </Brand>
      <Brand>
        <img src="./assets/images/viewers-pixar.png" alt="pixar" />
      </Brand>
      <Brand>
        <img src="./assets/images/viewers-starwars.png" alt="starwars" />
      </Brand>
    </BrandsContainer>
  );
};

export default Brands;
