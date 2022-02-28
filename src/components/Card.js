import React from "react";
import "../style/Card.css";
import { useStateValue } from "./StateProvider";

function Card(props) {
  const [{ }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        description: props.description
      }
    });
  };
  const fileUrl = props.image.replace(/\\/g, "/");
  const imageArray = fileUrl.split("/");
  const imageUrl = "http://localhost:5000/" + imageArray[1];
  console.log("this is image in card", imageUrl);

  return (
    <div className="Card__Container">
      <div className="Card__Logo">
        <img src={imageUrl} alt=" not found" />
      </div>
      <div className="Card__Description">
        <p>{props.description}</p>
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
