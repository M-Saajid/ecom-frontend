import React from "react";
import CurrencyFormat from "react-currency-format";
import "../style/Subtotal.css";
import { Baskettotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ basket, user }] = useStateValue();
  const navigate = useNavigate();
  const userName = localStorage.getItem("user");

  // check weather user exsist before proceeding to payment
  const userExist = () => {

    if (!userName) {
      navigate("/login");
    } else {
      navigate("/payment");
    }
  };

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

      <button onClick={userExist}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
