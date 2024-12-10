import React, { useState } from "react";
import "../styles/navbar.css"; // CSS file for styling

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
            <div className="container">
                {/* Logo */}
                <div className="logo">
                    <a href="/">
                        <span className="logo-icon"></span> Kattraan
                    </a>
                </div>

                {/* Hamburger menu for mobile view */}
                <div className="hamburger" onClick={toggleMenu}>
                    ☰
                </div>

                {/* Search bar */}
                <div className="search-bar">
                    <input type="text" placeholder="Search for anything" />
                    <button className="search-button">🔍</button>
                </div>

                {/* Right side links and buttons */}
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#categories">Categories</a>
                    <a href="#pricing">Plans & Pricing</a>
                    <a href="#teach">Teach on Kattraan</a>
                    <button className="login-button">Log In</button>
                    <button className="signup-button">Sign Up</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
