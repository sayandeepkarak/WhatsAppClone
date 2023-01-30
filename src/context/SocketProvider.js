import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import getAccessToken from "../modules/getAccessToken";

const socketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getSocketConnection = async () => {
      try {
        const accesstoken = await getAccessToken();
        if (!accesstoken) {
          navigate("/authentication");
        }
        const newSocket = io(process.env.REACT_APP_BACKEND_URL, {
          extraHeaders: {
            authorization: `Bearer ${accesstoken}`,
          },
        });
        newSocket.on("connect_error", (err) => {
          console.log(err.message);
        });
        setSocket(newSocket);
      } catch (err) {
        console.log(err);
      }
    };
    getSocketConnection();
  }, [navigate]);

  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
};

const useSocketContext = () => {
  return useContext(socketContext);
};

export default SocketProvider;
export { useSocketContext };
