import React, { useEffect, useState } from "react";
import PageviewIcon from "@material-ui/icons/Pageview";
import "../style/Search.css";
import axios from "axios";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
import { Input } from "@mantine/core";
import { At } from "tabler-icons-react";
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  const navigate = useNavigate();
  const [search, setSearch] = useState(" ");
  const [{}, dispatch] = useStateValue();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const send = (req, res) => {
    dispatch({
      type: "SET_SEARCH_KEY",
      searchkey: search
    });
    navigate("/searchproduct");
  };

  return (
    <div className="search">
      {/* <input className="search__Text" onChange={handleChange} type="text" /> */}
      {/* <PageviewIcon  sx={{ m: 5, width: "25ch" }} className="icon-material-u-i" onClick={send} /> */}
      <Input
        icon={<SearchIcon  />}
        variant="filled"
        placeholder="Search"
        radius="md"
        onChange={handleChange}
        onKeyPress={send}
        size="xs"
      />
    </div>
  );
}

export default Search;
