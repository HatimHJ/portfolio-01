import React from "react";
import "./Works.css";
import amazon from "../../img/amazon.png";
import fiverr from "../../img/fiverr.png";
import upwork from "../../img/Upwork.png";
import shopify from "../../img/Shopify.png";
import fb from "../../img/fb.png";
const Works = () => {
  return (
    <div className="works container">
      <div className="left">
        <span className="bold-text">Worked For These</span>
        <span className="orange-text">Clinets &amp; Brands</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          architecto?
          <br />
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <button className="btn btn-big">Hire Me</button>
        <div className="blur blur-yellow"></div>
      </div>

      <div className="right">
        <div className="main-circle">
          <div className="sec-circle">
            <img src={amazon} alt="" />
          </div>
          <div className="sec-circle">
            <img src={fb} alt="" />
          </div>
          <div className="sec-circle">
            <img src={fiverr} alt="" />
          </div>
          <div className="sec-circle">
            <img src={upwork} alt="" />
          </div>
          <div className="sec-circle">
            <img src={shopify} alt="shopify" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
