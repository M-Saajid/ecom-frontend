import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style/Product.css";
import Card from "./Card";
import Search from "./Search";

function Product() {
  
  const [itemDetail, setitemDetail] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("http://localhost:5000/api/items");
      setitemDetail(request.data.data.foundItems);
      return request;
    }
    fetchData();
  }, []);
  console.log(itemDetail);

  return (
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
