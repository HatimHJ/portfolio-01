import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience container">
      <div className="achievement">
        <div className="circle bold-text">+5</div>
        <span>Years</span>
        <span className="orange-text">Experience</span>
      </div>
      <div className="achievement">
        <div className="circle bold-text">+15</div>
        <span>Completed</span>
        <span className="orange-text">Projects</span>
      </div>
      <div className="achievement">
        <div className="circle bold-text">+5</div>
        <span>Companies</span>
        <span className="orange-text">Work</span>
      </div>
    </div>
  );
};

export default Experience;
