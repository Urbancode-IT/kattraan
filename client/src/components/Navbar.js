import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate for navigation
import "../assets/styles/navbar.css"; // Ensure the correct path to the CSS file

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();  // Hook for programmatic navigation

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to navigate to login page
    const handleLogin = () => {
        toggleMenu();  // Optional: close the menu when navigating
        navigate('/login');  // Navigate to the login page
    };

    // Function to navigate to signup page
    const handleSignUp = () => {
        toggleMenu();  // Optional: close the menu when navigating
        navigate('/signup');  // Navigate to the signup page
    };

    return (
        <header className="navbar">
            <div className="container">
                {/* Logo */}
                <div className="logo">
                    <Link to="/">
                        <span className="logo-icon"></span> Kattraan
                    </Link>
                </div>

                {/* Hamburger menu for mobile view */}
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
                    {menuOpen ? '✕' : '☰'}
                </button>

                {/* Search bar */}
                <div className="search-bar">
                    <input type="text" placeholder="Search for anything" aria-label="Search"/>
                    <button className="search-button" aria-label="Search button">🔍</button>
                </div>

                {/* Right side links and buttons */}
                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <Link to="/categories">Categories</Link>
                    <Link to="/pricing">Plans & Pricing</Link>
                    <Link to="/teach">Teach on Kattraan</Link>
                    <button className="login-button" onClick={handleLogin}>Log In</button>
                    <button className="signup-button" onClick={handleSignUp}>Sign Up</button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
