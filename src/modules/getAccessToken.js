import Cookies from "js-cookie";
import axiosInstance from "./Axios";

const setToken = async () => {
  const refreshtoken = Cookies.get("refresh-key");
  if (!refreshtoken) {
    return (window.location.href = "/authentication");
  }
  try {
    await axiosInstance.get("/api/refresh");
  } catch (err) {
    Cookies.remove("access-key");
    Cookies.remove("refresh-key");
    window.location.href = "/authentication";
  }
};

export { setToken };
