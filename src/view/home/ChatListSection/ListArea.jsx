import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../modules/Axios";
import getAccessToken from "../../../modules/getAccessToken";
import ChastListItem from "./ChastListItem";
import { ChastListArea } from "./chatlistsection.styled";

const ListArea = () => {
  const render = useRef(true);
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (!render.current) return;
    const getAllChats = async () => {
      try {
        const accesstoken = await getAccessToken();
        !accesstoken && navigate("/authentication");
        const chatRes = await axiosInstance.get("/api/allChats", {
          headers: { Authorization: `Bearer ${accesstoken}` },
        });
        setChats(chatRes.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllChats();
    render.current = false;
  }, [navigate]);

  return (
    <>
      <ChastListArea>
        {Array.from(chats).map((e) => {
          return <ChastListItem key={e._id} data={e} />;
        })}
      </ChastListArea>
    </>
  );
};

export default ListArea;
