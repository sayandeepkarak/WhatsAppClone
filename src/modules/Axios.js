import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:4000/",
  baseURL: "https://whatsappclone-sayandeep18.onrender.com/",
});

export default axiosInstance;
