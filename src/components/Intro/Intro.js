import React from "react";
import "./Intro.css";

import github from "../../img/gh.png";
import facebook from "../../img/fb.png";
import instagram from "../../img/in.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import Float from "../Float/Float";

const Intro = () => {
  return (
    <div className="intro container">
      <div className="i-left">
        <div className="i-name">
          <span>Hay! I Am</span>
          <span>Hatim H</span>
          <p>
            Iam a Front-End Developer and Wordpress Designer creating modern and
            resposive designs to Web
          </p>
        </div>
        <button className="btn btn-big">Contact Me</button>
        <div className="i-icons">
          <img src={github} alt="github" />
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
      <div className="i-right">
        <img src={vector1} alt="vector1" />
        <img src={vector2} alt="vector2" />
        <img src={boy} alt="boy" />
        <img src={glassesimoji} alt="glassesimoji" />
        <div className="crown">
          <Float crown={crown} text1="Web" text2="Developer" />
        </div>
        <div className="thumbup ">
          <Float crown={thumbup} text1="Best Design" text2="Award" />
        </div>
        <div className="blur blur-blue"></div>
        <div className="blur blur-yellow"></div>
      </div>
    </div>
  );
};

export default Intro;
