"use client";

import React, { useState } from "react";
import Link from "next/link";
import "../CSS/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu for mobile view
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <nav className="navbar-container">
        {/* Logo or Brand Name */}
        <div className="navbar-brand">
          <Link href="#home">PORTFOLIO</Link>
        </div>

        {/* Navbar links for desktop */}
        <div className="navbar-links">
          <Link href="#home" className="navbar-link">
            Home
          </Link>
          <Link href="#about" className="navbar-link">
            About
          </Link>
          <Link href="#projects" className="navbar-link">
            Projects
          </Link>
          <Link href="#services" className="navbar-link">
            Services
          </Link>
          <Link href="#contact" className="navbar-link">
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="navbar-menu-button">
          {isMenuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <Link href="#home" className="navbar-mobile-link">
            Home
          </Link>
          <Link href="#about" className="navbar-mobile-link">
            About
          </Link>
          <Link href="#projects" className="navbar-mobile-link">
            Projects
          </Link>
          <Link href="#services" className="navbar-mobile-link">
            Services
          </Link>
          <Link href="#contact" className="navbar-mobile-link">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
