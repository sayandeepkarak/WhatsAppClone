import React, { useEffect, useState } from "react";
import ChastListItem from "./ChastListItem";
import { ChastListArea } from "./chatlistsection.styled";
import { setToken } from "../../../modules/getAccessToken";
import axiosInstance from "../../../modules/Axios";
import { BeatLoader } from "react-spinners";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../../store/friendsSlice";

const ListArea = ({ socket, searchTerm }) => {
  const friends = useSelector((state) => state.friends.value);
  const [load, setLoad] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllChats = async () => {
      const accesstoken = Cookies.get("access-key");
      if (!accesstoken) {
        await setToken();
      }
      try {
        const chatRes = await axiosInstance("/api/allConnection");
        if (chatRes.status !== 204) {
          dispatch(setFriends(chatRes.data.data));
        }
      } catch (error) {
        if (error.response.status === 401) {
          await setToken();
          getAllChats();
        }
      } finally {
        setLoad(false);
      }
    };
    getAllChats();
  }, [dispatch]);

  return (
    <>
      {load ? (
        <BeatLoader color="#00a884" width={350} />
      ) : (
        <ChastListArea>
          {friends
            .filter((e) => {
              return e.friend.fullName
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
            .map((e) => {
              return <ChastListItem key={e._id} data={e} socket={socket} />;
            })}
        </ChastListArea>
      )}
    </>
  );
};

export default ListArea;
