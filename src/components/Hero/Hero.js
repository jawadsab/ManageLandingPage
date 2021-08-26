import React from 'react';

import './Hero.css';
import HeroImage from '../../assets/heroIllustration.svg';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <div className="hero-content-left">
          <h1>Bring everyone<br /> together to build better products</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button className="primary-btn">Get Started</Button>
        </div>
        <div className="hero-content-right">
          <img className="hero-svg" src={HeroImage} alt="..." />
        </div>
      </div>
    </>
  );
};

export default Hero;
