import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-container">
      <div className="left">
        <h2 className="logo">Test</h2>

        <span>toggle</span>
      </div>
      <div className="right">
        <div className="links">
          <ul>
            <li>Home</li>
            <li>Serivces</li>
            <li>Experience</li>
            <li>Portfoilo</li>
            <li>Testimonails</li>
          </ul>
        </div>
        <button className="btn">Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar;
