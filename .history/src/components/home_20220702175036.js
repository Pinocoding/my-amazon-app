import React from "react";
import "./Home.css";
import Product from "./Product";

function home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://tvseriesfinale.com/wp-content/uploads/2019/07/the-boys-amazon-canceled-renewed.jpg
        "
          alt=""
        />
        <div className="home__row">
          <Product
            id={12312312}
            title="he Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover - September 13, 2011"
            price={29.99}
            image="https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg"
            rating={4}
          />
          <Product
            id={12312312}
            title="he Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover - September 13, 2011"
            price={29.99}
            image="https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={12312312}
            title="he Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover - September 13, 2011"
            price={29.99}
            image="https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg"
            rating={4}
          />
          <Product
            id={12312312}
            title="he Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover - September 13, 2011"
            price={29.99}
            image="https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg"
            rating={4}
          />
          <Product
            id={12312312}
            title="he Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover - September 13, 2011"
            price={29.99}
            image="https://m.media-amazon.com/images/P/0307887898.01._SCLZZZZZZZ_SX500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={12312312}
            title="he Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover - September 13, 2011"
            price={29.99}
            image="https://images.samsung.com/is/image/samsung/vn-feature-super-ultra-wide-95180967?$FB_TYPE_A_JPG$"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default home;
