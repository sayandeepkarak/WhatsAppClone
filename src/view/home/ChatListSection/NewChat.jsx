import React from "react";
import { ChastListArea } from "./chatlistsection.styled";
import NewItem from "./NewItem";
import SearchBar from "./SearchBar";

const NewChat = () => {
  const lists = [];
  for (let i = 0; i < 15; i++) {
    lists.push(<NewItem key={i} />);
  }
  return (
    <>
      <SearchBar />
      <ChastListArea>{lists}</ChastListArea>
    </>
  );
};

export default NewChat;
