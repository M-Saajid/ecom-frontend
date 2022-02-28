import React from "react";
import CurrencyFormat from "react-currency-format";
import "../style/Subtotal.css";
import { Baskettotal } from "./reducer";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={Baskettotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"LKR "}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
