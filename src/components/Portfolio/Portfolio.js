import React from "react";
import "./Portfolio.css";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import one from "../../img/01.png";
import two from "../../img/02.png";
import three from "../../img/03.png";
import four from "../../img/04.png";
const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      {/* <h4>Portfolio</h4> */}

      <Swiper spaceBetween={10} slidesPerView={3} grabCursor={true}>
        <SwiperSlide>
          <img src={one} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
