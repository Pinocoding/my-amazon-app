import React from "react";

import { Link } from "react-router-dom";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Test({
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
          <Slider {...settings}></Slider>
          <div onClick={scrollToTop} className="slider__img">
            <div className="card">
              {item.onsales ? (
                <div className="card__sales">
                  <p>{item.onsales}</p>
                </div>
              ) : (
                <p className="card__nomarl">{item.sales}</p>
              )}
              <img src={item.image} alt="#" />
              <h2 className="card__title">{item.title}</h2>
              <p className="price">
                <strong>$</strong> {item.price}
              </p>
              <p className="rating">
                {Array(item.rating)
                  .fill()
                  .map(() => (
                    <StarRateIcon />
                  ))}
              </p>
              <p className="card__description">{item.description}</p>
            </div>
          </div>
          <div onClick={scrollToTop} className="slider__img">
            <a href="/BookStores">
              <img
                alt="#"
                src="https://img.freepik.com/free-psd/softcover-book-cover-mockup_337857-300.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
              />
            </a>
          </div>
          <div onClick={scrollToTop} className="slider__img">
            <a href="/BookStores">
              <img
                alt="#"
                src="https://img.freepik.com/free-psd/softcover-book-cover-mockup_337857-300.jpg?size=626&ext=jpg&ga=GA1.2.826934667.1658638639"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
