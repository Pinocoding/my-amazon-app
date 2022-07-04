import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://static.businessinsider.com/image/5e34521624306a1ed60db4d9-2400/ip%20amazon%20prime%20banner%202020.png"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <h2> The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
