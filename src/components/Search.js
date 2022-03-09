import React, { useEffect, useState } from "react";
import PageviewIcon from "@material-ui/icons/Pageview";
import "../style/Search.css";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState(" ");
  const [searchResults, setSearcResults] = useState([]);
  const [{ basket, updateBucket }, dispatch] = useStateValue();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const send = (req, res) => {
    
    const searchHandle = async () => {
        
      try {
        const result = await axios.post("http://localhost:5000/api/search", {
          title: search
        });
        setSearcResults(result.data.data);
        // console.log("this is search result",searchResults.foundItems[0].title);
      } catch (error) {
        console.log("this is the error", error);
      }
      if (searchResults.length != 0) {
        {
          searchResults.foundItems.map((items) => {
            console.log("this is items ", items);
            dispatch({
              type: "SEARCH",
              item: {
                id: items._id,
                title: items.title,
                image: items.image,
                price: items.price,
                rating: items.rating,
                description: items.description
              }
            });
          });
        }
        setSearch("")
        navigate("/searchproduct");
        
      }
    };

    searchHandle();
    
  };
  return (
    <div className="search">
      <input className="search__Text" onChange={handleChange} type="text" />
      <PageviewIcon className="icon-material-u-i" onClick={send} />
    </div>
  );
}

export default Search;
