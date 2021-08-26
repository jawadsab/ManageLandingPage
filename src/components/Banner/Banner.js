import React from 'react';

import './Banner.css';
import Button from '../Button/Button';
import SVG from '../../assets/bg-tablet-pattern.svg';

function Banner() {
  return (
    <>
      <section className="banner-main">
        <div className="svg-wrapper">
          <img src={SVG} alt="..." className="svg" />
        </div>
        <h1>Simplify how your team works today. Get Started</h1>
        <Button className="secondary-btn">Get Started</Button>
      </section>
    </>
  );
}

export default Banner;
