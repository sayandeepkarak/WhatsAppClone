import React from "react";
import { SearchBarArea, SearchBox } from "./chatlistsection.styled";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <>
      <SearchBarArea>
        <SearchIcon />
        <SearchBox />
      </SearchBarArea>
    </>
  );
};

export default SearchBar;
