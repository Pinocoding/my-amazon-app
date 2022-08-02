import React from "react";
import IndividualProduct from "./IndividualProduct";
import LoadingPage from "./LoadingPage";

import "./Product.css";

function ProductCard({ list, loading }) {
  return (
    <div className="card__container">
      {loading ? (
        <LoadingPage />
      ) : (
        <div>
          {list.map((item) => {
            return <IndividualProduct item={item} />;
          })}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
