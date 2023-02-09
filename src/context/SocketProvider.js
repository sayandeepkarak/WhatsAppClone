import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { io } from "socket.io-client";
import { setToken } from "../modules/getAccessToken";
import Cookies from "js-cookie";

const socketContext = createContext();

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();
  useEffect(() => {
    const getSocketConnection = async () => {
      let accesstoken = Cookies.get("access-key");
      if (!accesstoken) {
        accesstoken = await setToken();
      }
      try {
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
  }, []);

  return (
    <socketContext.Provider value={socket}>{children}</socketContext.Provider>
  );
};

const useSocketContext = () => {
  return useContext(socketContext);
};

export default SocketProvider;
export { useSocketContext };
