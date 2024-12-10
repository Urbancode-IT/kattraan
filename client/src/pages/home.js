import React, { useState } from "react";
import Navbar from "../components/navbar"; 
import HeroSection from "../components/hero";
import Feature from "../components/feature" ; 
import MentorSection from "../components/mentorsection";
import Footer from "../components/footer"; 

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu for mobile view
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
            <Navbar/>
            <HeroSection/>
            <Feature/>
            <MentorSection />
            <Footer/>
    </div>
  );
};

export default Home;
