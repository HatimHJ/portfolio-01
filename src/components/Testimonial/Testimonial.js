import React from "react";
import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import profilePic1 from "../../img/profile01.jpg";
import profilePic2 from "../../img/profile02.jpg";
import profilePic3 from "../../img/profile03.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
    <div className="testimonial ">
      <div className="t-heading">
        <span className="bold-text">Clients Always Get</span>
        <span className="orange-text">Exceptional Work</span>
        <span className="bold-text">From Me...</span>
      </div>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="t-card">
                <img src={client.img} alt="" />
                <p className="review">{client.review}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="blur blur-yellow"></div>
      <div className="blur blur-blue"></div>
    </div>
  );
};

export default Testimonial;
