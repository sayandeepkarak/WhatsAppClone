import React, { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../modules/Axios";
import getAccessToken from "../../../modules/getAccessToken";
import ChastListItem from "./ChastListItem";
import { ChastListArea } from "./chatlistsection.styled";

const ListArea = () => {
  const render = useRef(true);
  const navigate = useNavigate();

  const lists = [];
  for (let i = 0; i < 15; i++) {
    lists.push(<ChastListItem key={i} />);
  }

  useEffect(() => {
    if (!render.current) return;
    const getAllChats = async () => {
      try {
        const accesstoken = await getAccessToken();
        !accesstoken && navigate("/authentication");
        const chatRes = await axiosInstance.get("/api/allChats", {
          headers: { Authorization: `Bearer ${accesstoken}` },
        });
        console.log(chatRes.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllChats();
    render.current = false;
  }, [navigate]);
  return (
    <>
      <ChastListArea>{lists}</ChastListArea>
    </>
  );
};

export default ListArea;
