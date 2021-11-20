import React from "react";
import { BrandsContainer, Brand } from "../../styles/home/Brands";

const Brands = ({ brandsList }) => {
  return (
    <BrandsContainer>
      {brandsList.map((brand, index) => (
        <Brand key={index}>
          <img src={brand.image} alt={brand.text} />
          <video autoPlay={true} loop={true}>
            <source src={brand.video} type="video/mp4" />
          </video>
        </Brand>
      ))}
    </BrandsContainer>
  );
};

export default React.memo(Brands);
