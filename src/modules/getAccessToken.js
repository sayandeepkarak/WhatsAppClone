import Cookies from "js-cookie";
import axiosInstance from "./Axios";

const setToken = async () => {
  const refreshtoken = Cookies.get("refresh-key");
  if (!refreshtoken) {
    return (window.location.href = "/authentication");
  }

  try {
    const res = await axiosInstance.post("/api/refresh", {
      refreshToken: refreshtoken,
    });
    const { refreshToken, accessToken } = res.data.message;
    const date = new Date();
    date.setMinutes(date.getMinutes() + 1);

    Cookies.set("refresh-key", refreshToken, {
      path: "/",
      expires: 90,
    });
    Cookies.set("access-key", accessToken, {
      path: "/",
      expires: date,
    });
    return accessToken;
  } catch (err) {
    Cookies.remove("access-key");
    Cookies.remove("refresh-key");
    window.location.href = "/authentication";
  }
};

export { setToken };
