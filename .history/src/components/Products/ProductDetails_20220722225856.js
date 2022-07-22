import React, { useContext } from "react";
import { AuthContext } from "../DataLayer/Datalayer";

function ProductDetails() {
  const context = useContext(AuthContext);
  const list = context.list;
  return (
    <div>
      {list.map((item) => {
        return  ()
        // <h1> {item.title}</h1>
        <img src={item.image} alt="" />;
      })}
    </div>
  );
}

export default ProductDetails;
