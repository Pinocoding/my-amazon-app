import React from "react";

import { Link } from "react-router-dom";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSellerDressesTest({
  adaptiveHeight,
  dots,
  infinite,
  autoplay,
  autoplaySpeed,
  speed,
  slidesToScroll,
  slidesToShow,
}) {
  const settings = {
    adaptiveHeight,
    dots,
    infinite,
    autoplay,
    autoplaySpeed,
    speed,
    slidesToScroll,
    slidesToShow,
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container">
      <div className="topsellercarousel">
        <div>
          <Slider {...settings}>
            <div onClick={scrollToTop} className="slider__img">
              <div className="card">
                <div className="card__sales">
                  <p>Best Price !</p>
                </div>

                <Link to="/Dresses">
                  <img
                    alt="#"
                    src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                  />
                </Link>
                <h2 className="card__title">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Rerum aliquid, delectus, veniam soluta rem vero suscipit
                  blanditiis accusantium explicabo nisi eum quae nam consectetur
                  maxime alias saepe. Quia, nemo? Odit!
                </h2>
                <p className="price">
                  <strong>$</strong>999
                </p>

                <p className="card__description">{item.description}</p>
              </div>
            </div>
            <div onClick={scrollToTop} className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
            <div onClick={scrollToTop} className="slider__img">
              <Link to="/Dresses">
                <img
                  alt="#"
                  src="https://img.freepik.com/free-vector/cute-girl-thailand-traditional-cartoon-character-hand-draw-art-illustration_56104-1323.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
                />
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default TopSellerDressesTest;
