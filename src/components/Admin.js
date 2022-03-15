import React, { useState } from "react";
import "../style/Admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import baseUrl from "../components/url";

function Admin() {
  const navigate = useNavigate();
  //intitialize the value of details to null
  const [details, setDetails] = useState({
    title: " ",
    price: " ",
    desc: " ",
    rating: " ",
    quantity: " ",
    category: " "
  });
  //handling the image file
  const [files, setFiles] = useState();
  //onhandlechange the input values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };
  //submit the values added by the form
  const send = async (e) => {
    e.preventDefault();
    console.log("this is the state hooks", files);
    const data = new FormData();
    data.append("title", details.title);
    data.append("description", details.desc);
    data.append("price", details.price);
    data.append("rating", details.rating);
    data.append("quantity", details.quantity);
    data.append("category", details.category);
    data.append("productImage", files);
    try {
      console.log("this is data ", data);
      const response = await axios.post(`${baseUrl}/api/items`, data);
      console.log(response);
      navigate("/addminview");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="admin">
      <div className="admin__component">
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
          <button type="submit" onClick={send}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Admin;
