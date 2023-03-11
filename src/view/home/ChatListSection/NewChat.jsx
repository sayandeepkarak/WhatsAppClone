import React, { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../../../modules/Axios";
import { ChastListArea } from "./chatlistsection.styled";
import NewItem from "./NewItem";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";

const NewChat = ({ socket, closeItems }) => {
  const userData = useSelector((state) => state.userData.value);
  const friends = useSelector((state) => state.friends.value);
  const [friendsId, setFriendsId] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    friends.forEach((e) => {
      setFriendsId((old) => [...old, e.friend._id]);
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
  }, [setFriendsId, friends]);

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
                return (
                  <NewItem
                    key={e._id}
                    data={e}
                    friendsId={friendsId}
                    socket={socket}
                    close={closeItems}
                  />
                );
              })}
          </ChastListArea>
        </>
      )}
    </>
  );
};

export default NewChat;
