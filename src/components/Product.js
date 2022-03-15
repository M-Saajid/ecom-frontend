import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/Product.css";
import Card from "./Card";
import baseUrl from "./url";

function Product() {
  const [itemDetail, setitemDetail] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${baseUrl}/api/items`);
      setitemDetail(request.data.data.foundItems);
      return request;
    }
    fetchData();
  }, []);
  return (
    //customer view product
    <div className="Product">
      {itemDetail.map((c) => {
        return (
          <Card
            key={c._id}
            id={c._id}
            image={c.image}
            title={c.title}
            description={c.description}
            price={c.price}
            rating={c.rating}
            quantity={c.quantity}
          />
        );
      })}
    </div>
  );
}

export default Product;
