"use client";
import React, { useEffect } from "react";
import "../CSS/About.css";

const About = () => {
  useEffect(() => {
    // Lightning effect animation
    const lightning = document.querySelector(".lightning");
    if (lightning) {
      setInterval(() => {
        lightning.classList.add("flash");
        setTimeout(() => {
          lightning.classList.remove("flash");
        }, 1000);
      }, 5000);
    }
  });

  return (
    <section id="about" className="about-section">
      {/* Lightning Effect */}
      <div className="lightning"></div>

      <div className="about-container">
        <div className="about-content">
          {/* Profile Image with Effects */}
          <div className="profile-image">
            <img
              src="/image1.jpg" // Replace with your image path
              alt="Profile Image"
              className="profile-picture"
            />
            <div className="profile-border"></div>
          </div>

          {/* About Me Text Content */}
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              My name is IMAD UL ISLAM and I a'm a Web Developer. I have design
              many Websites with beautiful user interface with my 1 year
              experience in development career. I work with modern frameworks
              like Next.js, React, and Tailwind CSS. Beyond code, I enjoy
              discovering new places and connecting with others.{" "}
            </p>
            <a href="#contact" className="contact-button">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
