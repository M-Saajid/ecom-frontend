import React from "react";
import "../style/Card.css";

function Card(props) {
  return (
    <div className="Card__Container">
      <div className="Card__Logo">
        <img src="../pictures/KWU-015.jpg" alt="image not found" />
      </div>
      <div className="Card__Description">
        <p>
         {props.description}
        </p>
      </div>
      <div className="Card__Detail">
        <h4 className="price">LKR {props.price}</h4>
        <p className="rating">{Array(props.rating)
                    .fill()
                    .map((_, i) => (
                        <>🌟</>
                    ))}</p>
      </div>
      <button className="add__Basket">Add to basket</button>
    </div>
  );
}

export default Card;
