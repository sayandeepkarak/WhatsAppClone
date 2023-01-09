import React from "react";
import ChastListItem from "./ChastListItem";
import { ChastListArea } from "./chatlistsection.styled";

const ListArea = () => {
  const lists = [];
  for (let i = 0; i < 15; i++) {
    lists.push(<ChastListItem key={i} />);
  }
  return (
    <>
      <ChastListArea>{lists}</ChastListArea>
    </>
  );
};

export default ListArea;
