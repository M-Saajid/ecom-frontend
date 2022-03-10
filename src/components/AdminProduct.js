import axios from "axios";
import React from "react";
import "../style/AdminProducts.css";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function AdminProduct(props) {
  const [{ basket, updateBucket }, dispatch] = useStateValue();
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
  const UpdateItem = () => {
    dispatch({
      type: "ADD_TO_UPDATES",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
        description: props.description,
        quantity: props.quantity,
        category: props.category
      }
    });
  };

  return (
    <div className="adminProduct">
      <div className="admin__Container">
        <div className="Card__Logo">
          <p className="brand__titles">{props.title}</p>
          <img src={imageUrl} alt=" not found" />
        </div>
        <div className="Card__Description">
          <p>
            {props.description} <br></br>Available <b> {props.quantity} PCS</b>{" "}
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
        <div className="Card__button">
          <NavLink to="/addminUpdate">
            <button className="admin__btn" onClick={UpdateItem}>
              Update
            </button>
          </NavLink>
          <button className="admin__btn" onClick={DeleteItem}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
