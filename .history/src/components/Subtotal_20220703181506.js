import React from "react";
import CurrencyFormat from "react-currency-number-format";
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>Subtotal (o items)</p>
          </div>
        )}
      />
    </div>
  );
}

export default Subtotal;
