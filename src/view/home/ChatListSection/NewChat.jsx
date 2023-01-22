import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import axiosInstance from "../../../modules/Axios";
import { ChastListArea } from "./chatlistsection.styled";
import NewItem from "./NewItem";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const NewChat = () => {
  const userData = useSelector((state) => state.userData.value);
  const render = useRef(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!render.current) return;
    const getAllUsers = async () => {
      try {
        const res = await axiosInstance("/api/users");
        setUsers(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
    render.current = false;
  }, []);

  return (
    <>
      <SearchBar />
      <ChastListArea>
        {users
          .filter((e) => e._id !== userData._id)
          .map((e) => {
            return <NewItem key={e._id} data={e} />;
          })}
      </ChastListArea>
    </>
  );
};

export default NewChat;
