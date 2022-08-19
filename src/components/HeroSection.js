import React from 'react';
import HeroSectionImages from '../images/hero-section-images.png';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="images-container">
        <img
          src={HeroSectionImages}
          alt="Nine Random Images"
          className="random-images"
        />
      </div>
      <div className="hero-section-text-container">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
