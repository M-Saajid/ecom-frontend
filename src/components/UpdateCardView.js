import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import "../style/UpdateCardView.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import validate from "../validations/UpdateProduct";
import { useNotifications } from "@mantine/notifications";
import { CheckIcon } from "@modulz/radix-icons";
import { Rating, TextField, Typography } from "@mui/material";

function UpdateCardView() {
  const notifications = useNotifications();
  const [{ updateBucket }] = useStateValue();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const updateBucketItem = updateBucket[0];
  const [files, setFiles] = useState();
  const token = localStorage.getItem("jwt");
  console.log("this is the tocken", token);
  // constricting image url
  const imageArray = updateBucket[0].image.split("/");
  const imageUrl = `${process.env.REACT_APP_BASE_URL}/${imageArray[1]}`;
  console.log("this is  update bucket", updateBucket);
  //setting details to previes value
  const [details, setDetails] = useState({
    title: updateBucketItem.title,
    price: updateBucketItem.price,
    desc: updateBucketItem.description,
    rating: updateBucketItem.rating,
    quantity: updateBucketItem.quantity,
    category: updateBucketItem.category
  });
  const [values, setValues] = useState(updateBucket[0].rating);
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
      console.log("updating image", files);
      const data = new FormData();
      data.append("productImage", files);
      data.append("title", details.title);
      data.append("description", details.desc);
      data.append("price", details.price);
      data.append("rating", values);
      data.append("quantity", details.quantity);
      data.append("category", details.category);
      console.log("this data in the image ", [...data]);
      console.log("this is details of image", details);

      // updating the item where  we get from the reducer UPDATE_BUCKET
      try {
        const response = await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/api/items/${updateBucketItem.id}`,
          data,
          {
            headers: { authorization: token }
          }
        );
        console.log("this is api response ", response);

        // notification settings
        const id = notifications.showNotification({
          loading: true,
          title: "Updated the product",
          message: "update successfull",
          autoClose: false,
          disallowClose: true
        });
        setTimeout(() => {
          notifications.updateNotification(id, {
            id,
            color: "teal",
            title: "Updated  the product",
            icon: <CheckIcon />,
            autoClose: 500
          });
        }, 500);
      } catch (error) {
        console.log(error);
      }
      navigate(-1);
    }
  }, [errors]);

  return (
    <div className="Card__ContainerUpdate">
      <div className="Card__Logo">
        <div className="brand__titles">
          <p>{details.title}</p>
          <TextField
            id="outlined-basic"
            label="tittle"
            placeholder="Enter the tittle "
            name="title"
            variant="outlined"
            size="small"
            onChange={handleChange}
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "auto",
              marginRight: "auto"
            }}
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
          <TextField
            id="outlined-basic"
            label="Description"
            placeholder="Enter the Description "
            name="desc"
            variant="outlined"
            size="small"
            onChange={handleChange}
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
        </div>
        <div className="input__Fields">
          <TextField
            id="outlined-basic"
            label="Category"
            placeholder="Enter the Category "
            name="Category"
            variant="outlined"
            size="small"
            onChange={handleChange}
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
        </div>
        <div className="input__Fields">
          <TextField
            error={errors.quantity && true}
            helperText={errors.quantity && `${errors.quantity}`}
            id="outlined-basic"
            label="quantity"
            placeholder="Enter the Quantity "
            name="quantity"
            variant="outlined"
            size="small"
            onChange={handleChange}
            sx={{
              m: 1,
              width: "25ch",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
        </div>
      </div>
      <div className="Card__Detail">
        <h4 className="price">LKR {details.price}</h4>
        <p className="rating">
          <Rating name="read-only" value={details.rating} readOnly />
        </p>
      </div>
      <div className=" input__FieldRating">
        <Typography component="legend">Set Rating </Typography>
        <Rating
          name="rate half-rating"
          value={values}
          onChange={(event, newValue) => {
            setValues(newValue);
          }}
        />
      </div>
      <div className="input__Fields">
        <TextField
          error={errors.price && true}
          helperText={errors.price && `${errors.price}`}
          id="outlined-basic"
          label="Price"
          placeholder="Enter the price "
          name="price"
          variant="outlined"
          size="small"
          onChange={handleChange}
          sx={{ m: 1, width: "25ch", marginLeft: "auto", marginRight: "auto" }}
        />
      </div>
      <button className="updateBtn" type="submit" onClick={send}>
        update the details
      </button>
    </div>
  );
}

export default UpdateCardView;
