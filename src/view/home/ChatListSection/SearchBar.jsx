import React, { useRef, useState } from "react";
import { SearchBarArea, SearchBox } from "./chatlistsection.styled";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";

const SearchBar = () => {
  const [icons, setIcon] = useState(false);
  const searchRef = useRef(null);

  const handleReset = () => {
    searchRef.current.value = "";
    setIcon(false);
  };

  const handleFocus = () => searchRef.current.focus();
  const handleInput = () => setIcon(Boolean(searchRef.current.value));

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
            onClick={handleFocus}
          />
        )}
        <SearchBox ref={searchRef} onChange={handleInput} />
      </SearchBarArea>
    </>
  );
};

export default SearchBar;
