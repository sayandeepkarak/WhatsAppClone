import React, { useState } from "react";
import { SearchBarArea, SearchBox } from "./chatlistsection.styled";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";

const SearchBar = () => {
  const [icons, setIcon] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleReset = () => {
    setSearchText("");
    setIcon(false);
  };

  const handleInput = (e) => {
    setSearchText(e.target.value);
    setIcon(true);
  };

  return (
    <>
      <SearchBarArea>
        {icons ? (
          <ArrowBackIcon
            component={motion.svg}
            initial={{
              rotate: -45,
            }}
            transition={{
              type: "tween",
              duration: 0.1,
            }}
            animate={{
              rotate: 0,
            }}
            onClick={handleReset}
            sx={{ color: "#00a884" }}
          />
        ) : (
          <SearchIcon
            component={motion.svg}
            transition={{
              type: "tween",
              duration: 0.1,
            }}
            initial={{
              rotate: 45,
            }}
            animate={{
              rotate: 0,
            }}
          />
        )}
        <SearchBox value={searchText} onChange={handleInput} />
      </SearchBarArea>
    </>
  );
};

export default SearchBar;
