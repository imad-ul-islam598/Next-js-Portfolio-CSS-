import React from "react";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="bg-background text-white min-h-screen">
      <Navbar /> 
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}