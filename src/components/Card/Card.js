import React from "react";
import "./Card.css";
const Card = ({ icon, heading, body }) => {
  return (
    <>
      <img src={icon} alt={icon} />

      <h3>{heading}</h3>

      <p>{body}</p>
      <button className="btn">Learn More</button>
    </>
  );
};

export default Card;
