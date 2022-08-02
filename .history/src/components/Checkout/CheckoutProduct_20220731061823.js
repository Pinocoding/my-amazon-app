import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../DataLayer/Datalayer";
import CurrencyFormat from "react-currency-format";
import Indecbutton from "../Indecbutton/Indecbutton";

import "./CheckoutProduct.css";

function CheckoutProduct() {
  const context = useContext(AuthContext);
  const userCartProduct = context.userCartProduct;

  const removeCart = context.removeCart;
  const totalPrice = context.totalPrice;

  const handleRemoveCart = (item) => {
    removeCart(item);
  };
  return (
    <div>
      {userCartProduct.map((item) => {
        return (
          <div className="checkoutProduct">
            <div className="checkoutProduct__top">
              <Link to="/IndividualPage">
                <img
                  className="checkoutProduct__image"
                  src={item.image}
                  alt=""
                />
              </Link>
            </div>

            <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">{item.title}</p>
              <div className="checkoutProduct__option">
                <div className="checkoutProduct__incdec">
                  <Indecbutton item={item} />
                </div>

                <button
                  className="checkoutProduct__remove"
                  onClick={() => handleRemoveCart(item)}
                >
                  Remove
                </button>
              </div>
            </div>

            <div className="checkoutProduct__price">
              <strong>$</strong>
              <strong>{item.price * item.qty}</strong>
            </div>
          </div>
        );
      })}
      <div className="checkoutProduct__subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal&nbsp;
                <span className="subtotal__count">
                  ({userCartProduct.length} items)
                </span>
                &nbsp;: <strong>{value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={totalPrice}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default CheckoutProduct;
