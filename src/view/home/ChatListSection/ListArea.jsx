import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../modules/Axios";
import getAccessToken from "../../../modules/getAccessToken";
import ChastListItem from "./ChastListItem";
import { ChastListArea } from "./chatlistsection.styled";

const ListArea = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getAllChats = setInterval(async () => {
      try {
        const accesstoken = await getAccessToken();
        !accesstoken && navigate("/authentication");
        const chatRes = await axiosInstance("/api/allChats", {
          headers: { Authorization: `Bearer ${accesstoken}` },
        });
        if (chatRes.status !== 204) {
          setChats(chatRes.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }, 1000);
    return () => clearInterval(getAllChats);
  }, [navigate]);

  return (
    <>
      <ChastListArea>
        {chats.map((e) => {
          return <ChastListItem key={e._id} data={e} />;
        })}
      </ChastListArea>
    </>
  );
};

export default ListArea;
