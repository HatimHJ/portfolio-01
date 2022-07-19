import React from "react";
import "./Services.css";
import glassesimoji from "../../img/glasses.png";
import heartimoji from "../../img/heartemoji.png";
import humble from "../../img/humble.png";
import Card from "../Card/Card";
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
      <div className="right cards">
        <div className="card glassesimoji">
          <Card
            icon={glassesimoji}
            heading="Desing"
            body="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
        <div className="card heartimoji">
          <Card
            icon={heartimoji}
            heading="Desing"
            body="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
        <div className="card humble">
          <Card
            icon={humble}
            heading="Desing"
            body="Lorem ipsum dolor sit amet consectetur adipisicing."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
