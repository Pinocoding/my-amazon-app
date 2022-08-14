import React from "react";

import watch from "../../assets/images/watch.png";
import ProductDes from "../CarouselForm/ProductDes";
import "./WatchDetail.css";
function WatchDetail({ img, detailImg }) {
  return (
    <div className="product-detail">
      <ProductDes img={img} />
      <div>
        <br />
        <h3>Product Description</h3>
        <br />
        <div className="main">
          <img className="main-img" src={watch} alt={watch} />
        </div>
        <div className="middle">
          <div className="middle-column">
            <img src={img} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, asperiores dignissimos provident quibusdam architecto
              reprehenderit quod accusantium, ullam esse doloribus porro error
              cum alias in impedit totam animi voluptas quo.
            </p>
          </div>
          <div className="middle-column">
            <img src={img} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, asperiores dignissimos provident quibusdam architecto
              reprehenderit quod accusantium, ullam esse doloribus porro error
              cum alias in impedit totam animi voluptas quo.
            </p>
          </div>
          <div className="middle-column">
            <img src={img} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, asperiores dignissimos provident quibusdam architecto
              reprehenderit quod accusantium, ullam esse doloribus porro error
              cum alias in impedit totam animi voluptas quo.
            </p>
          </div>
        </div>
        <br />
        <div className="Secondary">
          <img src={watch} alt="" />
        </div>
      </div>
    </div>
  );
}

export default WatchDetail;
