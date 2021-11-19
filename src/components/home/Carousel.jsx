import React from "react";
import Slider from "react-slick";
import { ImageContainer } from "../../styles/home/Carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnDotsHover: true,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "50px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <ImageContainer>
        <div>
          <img src="./assets/images/slide1.jpg" alt="slide-1" />
        </div>
      </ImageContainer>
      <ImageContainer>
        <div>
          <img src="./assets/images/slide2.jpg" alt="slide-2" />
        </div>
      </ImageContainer>
      <ImageContainer>
        <div>
          <img src="./assets/images/BlackPanther.jpg" alt="slide-5" />
        </div>
      </ImageContainer>
      <ImageContainer>
        <div>
          <img src="./assets/images/toy_story.jpg" alt="slide-3" />
        </div>
      </ImageContainer>
      <ImageContainer>
        <div>
          <img src="./assets/images/star_wars.jpg" alt="slide-6" />
        </div>
      </ImageContainer>
      <ImageContainer>
        <div>
          <img src="./assets/images/slide7.jpg" alt="slide-7" />
        </div>
      </ImageContainer>
    </Slider>
  );
};

export default React.memo(Carousel);
