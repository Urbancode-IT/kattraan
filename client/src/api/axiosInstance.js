import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

// const axiosInstance = axios.create({
//   baseURL: "https://api.kattraan.com",
// });

<<<<<<< HEAD

=======
>>>>>>> ac9372921a5b054b26ec48282b3edfe2ef40e9b7
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
