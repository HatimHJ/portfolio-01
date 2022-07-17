import React from "react";
import "./Services.css";
import glassesimoji from "../../img/glasses.png";
import heartimoji from "../../img/heartemoji.png";
import humble from "../../img/humble.png";
const Services = () => {
  return (
    <div className="services container">
      <div className="left">
        <span>My Awessome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          architecto?
          <br />
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <button className="btn btn-big">Dowload CV</button>
        <div className="blur blur-yellow"></div>
      </div>
      <div className="right"></div>
      {/* <img src={glassesimoji} alt="" />
        <img src={heartimoji} alt="" />
        <img src={humble} alt="" /> */}
    </div>
  );
};

export default Services;
