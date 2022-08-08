import React from "react";
import Headset4k from "../../assets/images/headsets4k.png";
import ProductDes from "../CarouselForm/ProductDes";
import "./ProductDetail.css";

function ProductDetails({ img }) {
  return (
    <div className="product-detail">
      <h3>Product Description</h3>
      <ProductDes img={img} />
      <br />
      <div>
        <div className="main">
          <img className="main-img" src={Headset4k} alt="" />
        </div>
        <div className="middle">
          <div className="middle-column">
            <img src={Headset4k} alt="" />
            <p>
              *********Adjustable Headband********* The adjustable headband can
              fit different size of the heads, and the light-weight material is
              fit completely around your ears and won't over heat your head.
              What’s more, the metal frame headset is strong and durable enough
              to last a long sessions.
            </p>
          </div>
          <div className="middle-column">
            <img src={Headset4k} alt="" />
            <p>
              *********Skin-friendly Earmuffs********* Compared to other gaming
              headsets, Bengoo headset thickened the ear cushions to take more
              consideration to your ears and provide passive noise isolation.
              Superior comfortable over-ear pads reduce hearing impairment and
              heat sweat. Your extreme comfort could be ensured even a whole-day
              wearing.
            </p>
          </div>
          <div className="middle-column">
            <img src={Headset4k} alt="" />
            <p>
              **********Soft Head Beam Pad********** Designed with breathable
              memory foam pad, the entire frame is comfortable and incredibly
              durable, which allows you enjoy your favorite games, musics and
              movies without noticing the headset is on your head.
            </p>
          </div>
        </div>
        <div className="Secondary">
          <img src={Headset4k} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
