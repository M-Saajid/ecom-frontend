import axios from "axios";
import React, { useState } from "react";
import "../style/AdminUpdate.css";
import { useStateValue } from "./StateProvider";
import { NavLink } from "react-router-dom";
import baseUrl from "../components/url";

function AdminUpdate() {
  let userData = {};
  const [{ basket, updateBucket }] = useStateValue();
  const updateBucketItem = updateBucket[0];
  const [files, setFiles] = useState();
  //set the detail object into specifc updating item
  const [details, setDetails] = useState({
    title: updateBucketItem.title,
    price: updateBucketItem.price,
    desc: updateBucketItem.description,
    rating: updateBucketItem.rating,
    quantity: updateBucketItem.quantity,
    category: updateBucketItem.category,
    image: updateBucketItem.image
  });
  //onchange event handling
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };
  //sending datas to api endpoint
  const send = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("productImage", files);
    //converting form data into json
    data.forEach(function (value, key) {
      userData[key] = value;
    });

    console.log("this is details of image", details);
    console.log("this is details of form data", userData);
    // updating the item where  we get from the reducer UPDATE_BUCKET
    try {
      const response = await axios.patch(
        `${baseUrl}/api/items/${updateBucketItem.id}`,
        details
      );
      console.log("this is api response ", response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="admin__Update">
      <div className="update__Left">
        <h2>Add products</h2>
        <form className="admin__form">
          <div className="admin__detail">
            <div className="input__Fields">
              <p>Title</p>
              <input
                type="text"
                className="input__fields"
                name="title"
                placeholder="Enter the Title"
                onChange={handleChange}
              />
            </div>
            <div className="input__Fields">
              <p>Price LKR</p>
              <input
                type="text"
                className="input__fields"
                name="price"
                placeholder="Enter the price "
                onChange={handleChange}
              />
            </div>
            <div className="input__Fields">
              <p>Description</p>
              <input
                type="text"
                className="input__fields"
                name="desc"
                placeholder="Enter the price "
                onChange={handleChange}
              />
            </div>
            <div className="input__Fields">
              <p>Rating</p>
              <input
                type="text"
                className="input__fields"
                name="rating"
                placeholder="Enter the price "
                onChange={handleChange}
              />
            </div>
            <div className="input__Fields">
              <p>Quantity</p>
              <input
                type="text"
                className="input__fields"
                name="quantity"
                placeholder="Enter the price "
                onChange={handleChange}
              />
            </div>
            <div className="input__Fields">
              <p>category</p>
              <input
                type="text"
                className="input__fields"
                name="category"
                placeholder="Enter the price "
                onChange={handleChange}
              />
            </div>
            <input
              type="file"
              name="file"
              placeholder="Enter the Title"
              onChange={(event) => {
                const file = event.target.files[0];
                setFiles(file);
              }}
            />
          </div>
          <NavLink to="/addminview">
            <button type="submit" onClick={send}>
              update
            </button>
          </NavLink>
        </form>
      </div>
      <div className="upadate__Right"></div>
    </div>
  );
}

export default AdminUpdate;
