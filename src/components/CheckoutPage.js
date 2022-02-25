import React from "react";
import "../style/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function CheckoutPage() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Hello</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          <CheckoutProduct />
          <CheckoutProduct />

          <CheckoutProduct />
          <CheckoutProduct />

      


        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckoutPage;
