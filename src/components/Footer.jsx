import React from "react";
import { Link } from "react-router-dom"; // Import Link component for navigation
import "./Navbar.css"; // Add a CSS file for styling (if not already created)

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src="/images/logo.jpg" alt="Logo" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
