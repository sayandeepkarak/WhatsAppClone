import Cookies from "js-cookie";
import axiosInstance from "./Axios";

const getAccessToken = async () => {
  const refreshToken = Cookies.get("refresh-key");
  if (!refreshToken) {
    return false;
  }
  const getTokens = await axiosInstance.post("/api/refresh", {
    refreshToken,
  });
  const data = getTokens.data.message;
  Cookies.set("refresh-key", data.refreshToken, {
    path: "/",
    expires: 90,
  });
  return data.accessToken;
};

export default getAccessToken;
