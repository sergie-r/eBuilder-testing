import React from 'react';

const Slider = () => (
  <div className="carousel-wrapper">
    <span id="item-1" />
    <span id="item-2" />
    <span id="item-3" />
    <div className="carousel-item item-1">
      <img src="../images/slide-1.jpg" alt="slide-1"/>
      <a className="arrow arrow-prev" href="#item-3">Prev</a>
      <a className="arrow arrow-next" href="#item-2">Next</a>
    </div>
    <div className="carousel-item item-2">
      <img src="../images/slide-2.jpg" alt="slide-2"/>
      <a className="arrow arrow-prev" href="#item-1">Prev</a>
      <a className="arrow arrow-next" href="#item-3">Next</a>
    </div>
    <div className="carousel-item item-3">
      <img src="../images/slide-3.jpg" alt="slide-3"/>
      <a className="arrow arrow-prev" href="#item-2">Prev</a>
      <a className="arrow arrow-next" href="#item-1">Next</a>
    </div>
  </div>
);

export default Slider;
