import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Correct path if necessary
import HeroSection from "../components/Hero"; // Ensure component and file name match
import Feature from "../components/Feature";
import MentorSection from "../components/Mentorsection"; // Ensure component and file name match
import Footer from "../components/Footer";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // If handleMenuToggle is not used, consider removing it or ensure it's used
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
        <Navbar handleMenuToggle={handleMenuToggle}/> 
        <HeroSection/>
        <Feature/>
        <MentorSection/>
        <Footer/>
    </div>
  );
};

export default Home;
