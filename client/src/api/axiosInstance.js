import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001",
});

// const axiosInstance = axios.create({
//   baseURL: "https://api.kattraan.com",
// });


axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
