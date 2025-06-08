import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Check if user is logged in by looking for a JWT token in sessionStorage
  const isLoggedIn = !!sessionStorage.getItem("jwtToken");

  return (
    // Main navigation header
    <header className="navbar">
      {/* Logo section with site name and tagline */}
      <a href="/">
        <div className="logo">
          <div className="logo-text">
            <h1>WEB MASTERS</h1>
            <p>Proper Education With Success</p>
          </div>
        </div>
      </a>
      <div className="linkHold">
        {/* Hamburger menu toggle for mobile view */}
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>

        {/* Navigation links */}
        <nav className="nav-links">
          <a href="#courses">Courses</a>
           <Link to="/member">Student ID Card</Link>
          <a href="#contact">Contact</a>
        </nav>

        {/* Show Login button if not logged in, else show profile icon */}
        {!isLoggedIn ? (
          <a href="/login" className="login-btn">
            Login
          </a>
        ) : (
          <a href="/member" className="profile-icon" title="Profile">
            <span role="img" aria-label="profile">
              👤
            </span>
          </a>
        )}
      </div>
    </header>
  );
};

export default Navbar;
