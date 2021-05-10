import React from "react";
import ReactSlider from "react-slick";

export default function Slider({ children, className }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <ReactSlider {...settings} className={className}>
      {children}
    </ReactSlider>
  );
}
