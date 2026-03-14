import React from "react";
import Slider from "react-slick";
import "./navbar.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {

  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  const images = [
    "https://www.oyorooms.com/blog/wp-content/uploads/2017/10/Feature-Image-min-2-1.jpg",
    "https://d2al04l58v9bun.cloudfront.net/blog/wp-content/uploads/2022/07/20122054/Indian-Temple-Architecture-With-The-Most-Amazing-Stories.jpg",
    "https://blogs.revv.co.in/blogs/wp-content/uploads/2020/11/Somnath-Temple.jpg",
    "https://img.veenaworld.com/wp-content/uploads/2021/02/10-Famous-South-Indian-Temples-You-Should-Not-Miss.jpg"
  ];

  return (
    <section className="banner-section">

      <div className="banner-slider">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt="Temple Banner" className="banner-image" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="marquee-container">
        <div className="marquee-text">
          Book your tickets for Temple Darshan now! Limited slots available.
          Don't miss the divine experience.
        </div>
      </div>

    </section>
  );
};

export default Banner;