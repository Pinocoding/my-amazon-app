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
          {/* product  */}
          <Product title="The lean startup" price={29.99} />
          <Product />
          {/* product */}
        </div>
        <div className="home__row">
          {/* product  */}
          {/* product  */}
          {/* product */}
        </div>
        <div className="home__row">{/* product  */}</div>
      </div>
    </div>
  );
}

export default home;
