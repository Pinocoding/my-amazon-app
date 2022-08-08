import React from "react";
import ProductDes from "../CarouselForm/ProductDes";
import "./ProductDetail.css";

function ProductDetails({ img }) {
  return (
    <div className="product-detail">
      <h3>Product Description</h3>
      <ProductDes img={img} />
      <div>
        <div className="main-img">
          <div className="main-img1">
            <img src="" alt="" />
          </div>
          <div className="main-img2">
            <img src="" alt="" />
          </div>
          <div className="main-img3">
            <img src="" alt="" />
          </div>
        </div>
        <div className="Secondary-img"></div>
      </div>
    </div>
  );
}

export default ProductDetails;
