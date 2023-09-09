import Cookies from "js-cookie";
import axiosInstance from "./Axios";

const setToken = async () => {
  const refreshtoken = Cookies.get("refresh-key");
  if (!refreshtoken) {
    // return (window.location.href = "/authentication");
    return false;
  }
  try {
    await axiosInstance.get("/api/refresh");
    return true;
  } catch (err) {
    Cookies.remove("access-key");
    Cookies.remove("refresh-key");
    return false;
    // window.location.href = "/authentication";
  }
};

export { setToken };
