import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const currentItem = context.currentItem;
  console.log(currentItem);
  return (
    <div className="product-detail">
      <img src={currentItem.images} alt="" />
    </div>
  );
}

export default ProductDetails;
