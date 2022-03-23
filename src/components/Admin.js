import React, { useEffect, useState } from "react";
import "../style/Admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validate from "../validations/Addproducts";

function Admin() {
  const navigate = useNavigate();
  //check user is clicked the submit button
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  //intitialize the value of details to null
  const [details, setDetails] = useState({
    title: "",
    price: "",
    desc: "",
    rating: "",
    quantity: "",
    category: ""
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
    console.log("this is the file", files);
    setErrors(validate(details, files));
    setIsSubmitting(true);
  };
  useEffect(async () => {
    // check if any validation errors are presentand user have selected the image
    if (Object.keys(errors).length === 0 && isSubmitting && files) {
      const data = new FormData();
      data.append("title", details.title);
      data.append("description", details.desc);
      data.append("price", details.price);
      data.append("rating", details.rating);
      data.append("quantity", details.quantity);
      data.append("category", details.category);
      data.append("productImage", files);
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/api/items`,
          data
        );
        console.log(response);
        navigate("/addminview");
      } catch (error) {
        console.log(error);
      }
    }
  }, [errors]);
  return (
    <div className="admin">
      <div className="admin__component">
        <h2>Add products</h2>
        <form className="admin__form">
          <div className="admin__detail">
            <div className="input__Fields">
              <p>title</p>
              <input
                type="text"
                className="input__fields"
                name="title"
                placeholder="Enter the title"
                onChange={handleChange}
                value={details.title}
              />
              {errors.title && <p className="alert">{errors.title}</p>}
            </div>
            <div className="input__Fields">
              <p>Price LKR</p>
              <input
                type="text"
                className="input__fields"
                name="price"
                placeholder="Enter the price "
                onChange={handleChange}
                value={details.price}
              />
              {errors.price && <p className="alert">{errors.price}</p>}
            </div>
            <div className="input__Fields">
              <p>Description</p>
              <input
                type="text"
                className="input__fields"
                name="desc"
                placeholder="Enter the Description "
                onChange={handleChange}
                value={details.desc}
              />
              {errors.desc && <p className="alert">{errors.desc}</p>}
            </div>
            <div className="input__Fields">
              <p>Rating</p>
              <input
                type="text"
                className="input__fields"
                name="rating"
                placeholder="Enter the rating "
                onChange={handleChange}
                value={details.rating}
              />
              {errors.rating && <p className="alert">{errors.rating}</p>}
            </div>
            <div className="input__Fields">
              <p>Quantity</p>
              <input
                type="text"
                className="input__fields"
                name="quantity"
                placeholder="Enter the quantity "
                onChange={handleChange}
                value={details.quantity}
              />
              {errors.quantity && <p className="alert">{errors.quantity}</p>}
            </div>
            <div className="input__Fields">
              <p>category</p>
              <input
                type="text"
                className="input__fields"
                name="category"
                placeholder="Enter the category "
                onChange={handleChange}
                value={details.category}
              />
              {errors.category && <p className="alert">{errors.category}</p>}
            </div>
            <input
              type="file"
              name="file"
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
