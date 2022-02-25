import React from "react";
import CurrencyFormat from "react-currency-format";
import "../style/Subtotal.css"

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal (0 items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"LKR "}
      />

      <button>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
