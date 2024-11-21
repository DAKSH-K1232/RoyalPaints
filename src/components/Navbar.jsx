import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src="/images/y.jpg" alt="Royal Paints" className="logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/auth">Login</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li><Link to="/cart">Cart</Link></li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
