import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import axiosInstance from "../../../modules/Axios";
import { ChastListArea } from "./chatlistsection.styled";
import NewItem from "./NewItem";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

const NewChat = () => {
  const userData = useSelector((state) => state.userData.value);
  const friends = useSelector((state) => state.friends.value);
  const render = useRef(true);
  const [friendsId, setFriendsId] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (!render.current) return;
    friends.forEach((e) => {
      setFriendsId([...friendsId, e.friend._id]);
    });
    const getAllUsers = async () => {
      try {
        const res = await axiosInstance("/api/users");
        setUsers(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoad(false);
      }
    };
    getAllUsers();
    render.current = false;
  }, [setFriendsId, friendsId, friends]);

  return (
    <>
      {load ? (
        <BeatLoader color="#00a884" width={350} />
      ) : (
        <>
          <SearchBar setSearch={setSearchText} />
          <ChastListArea>
            {users
              .filter((e) => {
                return (
                  e._id !== userData._id &&
                  e.fullName.toLowerCase().includes(searchText.toLowerCase())
                );
              })
              .map((e) => {
                return <NewItem key={e._id} data={e} friendsId={friendsId} />;
              })}
          </ChastListArea>
        </>
      )}
    </>
  );
};

export default NewChat;
