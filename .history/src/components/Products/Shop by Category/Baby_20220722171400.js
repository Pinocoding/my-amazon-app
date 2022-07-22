import React from "react";
import ProductCard from "./ProductCard.js";
import OptionLeft from "./OptionLeft.js";
import "../Product.css";

function Keyboards() {
  return (
    <div className="headsets">
      <div className="headsets__toolbar"></div>
      <div className="headsets__container">
        <div className="headsets__containeroptions">
          <div className="headsets__optionsleft">
            <OptionLeft />
          </div>
        </div>
        <div className="headsets__containerright">
          <div className="headsets__row">
            <ProductCard col={"keyboards"} id={"id"} orderBy={"desc"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keyboards;
