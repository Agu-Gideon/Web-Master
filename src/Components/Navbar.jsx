import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  // Check if user is logged in by looking for the JWT token
  const isLoggedIn = !!sessionStorage.getItem("jwtToken");

  return (
    <header className="navbar">
      <a href="/">
        <div className="logo">
          <div className="logo-text">
            <h1>WEB MASTERS</h1>
            <p>Proper Education With Success</p>
          </div>
        </div>
      </a>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        &#9776;
      </label>

      <nav className="nav-links">
        <a href="#courses">Courses</a>
        <a href="/member">Student ID Card</a>
        <a href="#contact">Contact</a>
        {/* Conditionally render login button or profile icon */}
        {!isLoggedIn ? (
          <a href="/login" className="login-btn">
            Login
          </a>
        ) : (
          <a href="/member" className="profile-icon" title="Profile">
            {/* You can use an emoji, SVG, or an <img> for the icon */}
            <span role="img" aria-label="profile">
              👤
            </span>
          </a>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
