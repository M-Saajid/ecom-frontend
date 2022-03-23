import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "../style/UpdateCardView.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validate from "../validations/UpdateProduct";

function UpdateCardView() {
  const [{ updateBucket }] = useStateValue();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const updateBucketItem = updateBucket[0];
  const [files, setFiles] = useState();
  // constricting image url
  const imageArray = updateBucket[0].image.split("/");
  const imageUrl = `${process.env.REACT_APP_BASE_URL}/${imageArray[1]}`;
  console.log("this is image in card", imageUrl);
  //setting details to previes value
  const [details, setDetails] = useState({
    title: updateBucketItem.title,
    price: updateBucketItem.price,
    desc: updateBucketItem.description,
    rating: updateBucketItem.rating,
    quantity: updateBucketItem.quantity,
    category: updateBucketItem.category
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  const send = async (e) => {
    e.preventDefault();
    setErrors(validate(details, files));
    setIsSubmitting(true);
  };

  useEffect(async () => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const data = new FormData();
      data.append("productImage", files);
      data.append("title", details.title);
      data.append("description", details.desc);
      data.append("price", details.price);
      data.append("rating", details.rating);
      data.append("quantity", details.quantity);
      data.append("category", details.category);
      console.log("this data in the image ", [...data]);
      console.log("this is details of image", details);

      // updating the item where  we get from the reducer UPDATE_BUCKET
      try {
        const response = await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/api/items/${updateBucketItem.id}`,
          data
        );
        console.log("this is api response ", response);
      } catch (error) {
        console.log(error);
        alert(error);
      }
      navigate(-1);
    }
  }, [errors]);

  return (
    <div className="Card__ContainerUpdate">
      <div className="Card__Logo">
        <div className="brand__titles">
          <p>{details.title}</p>
          <input
            type="text"
            className="input__fields"
            name="title"
            placeholder="Update  the title"
            onChange={handleChange}
          />
        </div>
        <div className="brand__image">
          <form>
            <img className="cardImage" src={imageUrl} alt=" image not found" />
            <input
              type="file"
              name="productImage"
              placeholder="Enter the title"
              onChange={(event) => {
                const file = event.target.files[0];
                setFiles(file);
              }}
            />
          </form>
        </div>
      </div>
      <div className="Card__Description">
        <p>
          {details.desc} <br></br>we have only <b> {details.quantity} PCS</b>{" "}
        </p>
        <div className="input__Fields">
          <p>Description</p>
          <input
            type="text"
            className="input__fields"
            name="desc"
            placeholder="Enter the Description "
            onChange={handleChange}
          />
        </div>
        <div className="input__Fields">
          <p>Category</p>
          <input
            type="text"
            className="input__fields"
            name="category"
            placeholder="Enter the category "
            onChange={handleChange}
          />
        </div>
        <div className="input__Fields">
          <p>Quantity</p>
          <input
            type="text"
            className="input__fields"
            name="quantity"
            placeholder="Enter the Quantity "
            onChange={handleChange}
            value={details.quantity}
          />
          {errors.quantity && <p className="alert">{errors.quantity}</p>}
        </div>
      </div>
      <div className="Card__Detail">
        <h4 className="price">LKR {details.price}</h4>
        <p className="rating">
          {Array(details.rating)
            .fill()
            .map((_, i) => (
              <>🌟</>
            ))}
        </p>
      </div>
      <div className="input__Fields">
        <p>Rating</p>
        <input
          type="text"
          className="input__fields"
          name="rating"
          placeholder="Enter the Rating "
          onChange={handleChange}
          value={details.rating}
        />
        {errors.rating && <p className="alert">{errors.rating}</p>}
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
      <button className="updateBtn" type="submit" onClick={send}>
        update the details
      </button>
    </div>
  );
}

export default UpdateCardView;
