import React from 'react';
import BtnSlider from './BtnSlider';

const SliderList = ({ children }) => {
  return (
    <div className="listContainer">
      <BtnSlider show={2}>{children}</BtnSlider>
    </div>
  );
};

export default SliderList;
