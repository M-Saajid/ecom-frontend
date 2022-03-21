import React from "react";
import "../style/Card.css";
import { useStateValue } from "./StateProvider";
import baseUrl from "../components/url";

function Card(props) {
  const [{}, dispatch] = useStateValue();
  // adding to the  basket in reducer so user can view it in the cart
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        description: props.description,
        quantity: props.quantity
      }
    });
  };
  //steps to  access the image through url
  const fileUrl = props.image.replace(/\\/g, "/");
  const imageArray = fileUrl.split("/");
  const imageUrl = `${baseUrl}/${imageArray[1]}`;
  console.log("this is image in card", imageUrl);
  return (
    <div className="Card__Container">
      <div className="Card__Logo">
        <p className="brand__titles">{props.title}</p>
        <img src={imageUrl} alt=" not found" />
      </div>
      <div className="Card__Description">
        <p>
          {props.description} <br></br>we have only <b> {props.quantity} PCS</b>{" "}
        </p>
      </div>
      <div className="Card__Detail">
        <h4 className="price">LKR {props.price}</h4>
        <p className="rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <>🌟</>
            ))}
        </p>
      </div>
      <button onClick={addToBasket} className="add__Basket">
        Add to basket
      </button>
    </div>
  );
}

export default Card;
