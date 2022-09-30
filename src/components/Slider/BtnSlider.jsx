import React from 'react';
import Slider from 'react-slick';

function PrevArrow(props) {
  const { onClick } = props;
  return <div className="arrow prev" onClick={onClick}></div>;
}
function NextArrow(props) {
  const { onClick } = props;
  return <div className="arrow next" onClick={onClick}></div>;
}

const BtnSlider = ({ children, show }) => {
  const settings = {
    infinite: true,
    slidesToShow: show,
    slidesToScroll: 2,
    speed: 400,
    adaptiveHeight: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default BtnSlider;
