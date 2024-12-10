import React from "react";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Learning that gets you</h1>
        <p>Skills for your present (and your future). Get started with us.</p>
      </div>
      <div className="hero-image">
        <img
          src="/assets/images/hero.png" // Local image path from the public directory
          alt="Hero"
        />
      </div>
      {/* Optional navigation buttons */}
    </div>
  );
};

export default HeroSection;
