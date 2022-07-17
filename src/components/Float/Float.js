import React from "react";
import "./Float.css";
const Float = ({ crown, text1, text2 }) => {
  return (
    <div className="float">
      <img src={crown} alt="" />
      <span>
        {text1} <br /> {text2}
      </span>
    </div>
  );
};

export default Float;
