// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* <h2>MyWebsite</h2> */}
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link> {/* Link to the Home route */}
        </li>
        <li>
          <Link to="/about">About</Link> {/* Link to the About route */}
        </li>
        <li>
          <Link to="/contact">Contact</Link> {/* Link to the Contact route */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
