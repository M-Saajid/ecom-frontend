import axios from "axios";
import React from "react";
import "../style/AdminProducts.css";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

function AdminProduct(props) {
  const navigate = useNavigate();
  const [{}, dispatch] = useStateValue();

  // replacing file "\\" into "//" in image path
  const fileUrl = props.image.replace(/\\/g, "/");
  // split all th "/" get the image into array
  const imageArray = fileUrl.split("/");
  //accessing the image array and adding to base url to get the image
  const imageUrl = `${process.env.REACT_APP_BASE_URL}/${imageArray[1]}`;

  //deleteing the item from admin dashboard
  const DeleteItem = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/api/items/${props.id}`
      );
      console.log(response);
      // window.location.reload();
      navigate("/product");
    } catch (error) {
      console.log(error);
    }
  };

  //upload the item to reducer so admin can update the specific from the update ui
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
    navigate("/addminUpdate");
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
          <button className="admin__btn" onClick={UpdateItem}>
            Update
          </button>

          <button className="admin__btn" onClick={DeleteItem}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminProduct;
