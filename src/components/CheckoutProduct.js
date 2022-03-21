import React from "react";
import "../style/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";


function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  //removing the items from the basket  from the reducer
  const removeItems = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id
    });
  };
  //image accessing
  const imageArray = props.image.split("/");
  const imageUrl = `${process.env.REACT_APP_BASE_URL}/${imageArray[1]}`;
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={imageUrl} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__price">
          <small>LKR </small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>

        <button onClick={removeItems}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
