import React from "react";
import "../style/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function CheckoutPage() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      {/* view the subtotal with product  ui in left  */}
      <div className="checkout__left">
        <div>
          <h3>Hello</h3>
          {basket?.length === 0 ? (
            <div>
              <h2 className="checkout__title">
                Your shopping Basket Is Empty{" "}
              </h2>
              <p>
                You have no product in the cart ,Please add to cart by clicking
                "ADD TO BASKET" button in the collection{" "}
              </p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your shopping Basket</h2>
              {/*  view the  products were we  dispatch from cart so user can confirm the items  */}
              {basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  rating={item.rating}
                  description={item.description}
                  quantity={item.quantity}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckoutPage;
