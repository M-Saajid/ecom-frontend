import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/AdminProducts.css";
function AdminProduct(props) {
  const fileUrl = props.image.replace(/\\/g, "/");
  const imageArray = fileUrl.split("/");
  const imageUrl = "http://localhost:5000/" + imageArray[1];
  const DeleteItem = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/api/items/" + props.id
      );
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="adminProduct">
      <div className="admin__Container">
        <div className="Card__Logo">
          <img src={imageUrl} alt=" not found" />
        </div>
        <div className="Card__Description">
          <p>{props.description}</p>
        </div>
        <div className="Card__Description">
          <p>{props.category}</p>
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
        <div className="Card__button">
          <button>Update</button>
          <button onClick={DeleteItem}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
