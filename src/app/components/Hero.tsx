import React from "react";
import Image from "next/image";
import "../CSS/Hero.css"; // Import the CSS file

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Left Side - Image */}
      <div className="hero-image-container">
        <Image
          src="/image1.jpg" // Add your image path here
          alt="Profile"
          width={400}
          height={500}
          className="hero-image"
        />
      </div>

      {/* Right Side - Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-name">Imad Ul Islam</span>
        </h1>
        <h2 className="hero-subtitle">Developer & UI/UX Designer</h2>
        <p className="hero-description">
          I’m a passionate web developer and UI/UX designer with a strong focus
          on creating user-centered experiences. Do you want to make a website
          for your Business and grow your work? So you're on the right place.
        </p>
        <button className="hero-button">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
