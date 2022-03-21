import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useStateValue } from "./StateProvider";

function SearchProduct() {
  const [{ searchBucket }] = useStateValue();
  console.log("search state ", searchBucket);

  return (
    // view all search products
    <div className="Product">
      {/* pass all searched items to card element  */}
      {searchBucket.map((c) => {
        return (
          <Card
            key={c._id}
            id={c._id}
            image={c.image}
            title={c.title}
            description={c.description}
            price={c.price}
            rating={c.rating}
          />
        );
      })}
    </div>
  );
}

export default SearchProduct;
