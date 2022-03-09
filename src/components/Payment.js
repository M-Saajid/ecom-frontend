import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import "../style/Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { Baskettotal } from "./reducer";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessingd] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    //generate stripe sectret allows to charge the customers
    const getClientSecret = async () => {
      const response = await axios.post(
        `http://localhost:5000/payment/create?total=${Baskettotal(basket)}`
      );
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, []);
  console.log("Client Secret is >>>", clientSecret);
  const handleSubmit = async (event) => {
    //stripe
    event.preventDefault();
    setProcessingd(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)
        }
      })
      .then(({ paymentIntent }) => {
        // paymentIntent is paymentconfirmation
        setSucceeded(true);
        setError(null);
        setProcessingd(false);
        dispatch({
          type: "EMPTY_BASKET"
        });
        navigate("/product");
      });
  };
  const handleChange = (event) => {
    //display error when customer type their card details
    //listen to  changes on the card element
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="paymnet__container">
        {/* payment dilivery address section */}
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} Items</Link>){" "}
        </h1>
        <div className="paymnet__section">
          <div className="payment__title">
            <h3>Dilivery Address</h3>
          </div>
          <div className="payment__address">
            <p>userEmail</p>
            <p>React__Lane</p>
          </div>
        </div>
        {/* review item  */}
        <div className="paymnet__section">
          <div className="payment__title">
            <h3>Review Items </h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                description={item.description}
              />
            ))}
          </div>
        </div>
        {/* payment method */}
        <div className="paymnet__section">
          <div className="payment__title">
            <h3>payment method</h3>
          </div>
          <div className="payment__details">
            {/* stripe will be here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__pricecontainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Subtotal ({basket.length} items):{" "}
                        <strong>{value}</strong>
                      </p>
                      <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                      </small>
                    </>
                  )}
                  decimalScale={2}
                  value={Baskettotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"LKR "}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* errors handling */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
