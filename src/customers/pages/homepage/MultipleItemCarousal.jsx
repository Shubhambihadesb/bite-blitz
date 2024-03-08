import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { topMeals } from "./TopMeals";
import CarousalItem from "./CarousalItem";

const MultipleItemCarousal = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    authplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div>
      <Slider {...settings}>
        {topMeals.map((item) => (
          <CarousalItem image={item.image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};

export default MultipleItemCarousal;
