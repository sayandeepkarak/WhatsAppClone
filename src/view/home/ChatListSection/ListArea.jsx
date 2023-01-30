import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ChastListItem from "./ChastListItem";
import { ChastListArea } from "./chatlistsection.styled";
import getAccessToken from "../../../modules/getAccessToken";
import axiosInstance from "../../../modules/Axios";

const ListArea = () => {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    console.log("call");
    const getAllChats = async () => {
      try {
        const accesstoken = await getAccessToken();
        !accesstoken && navigate("/authentication");
        const chatRes = await axiosInstance("/api/allConnection", {
          headers: { Authorization: `Bearer ${accesstoken}` },
        });
        if (chatRes.status !== 204) {
          setChats(chatRes.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllChats();
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
