import { getLocalStorage, removeLocalStorage } from "@/utils";
import axios from "axios";

export const instantAxios = axios.create({
  baseURL: "https://be-youtube-video-sharing-app.vercel.app/api",
  timeout: 4000,
});

// Interceptor để thêm token vào trường header của mỗi request
instantAxios.interceptors.request.use(
  (config) => {
    // Lấy token từ nơi lưu trữ nó (ví dụ: localStorage)
    const token = getLocalStorage("token");
    // Nếu có token, thêm vào trường Authorization của header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instantAxios.interceptors.response.use(
  (data) => data,
  (error) => {
    if (error.response.status === 401) {
      removeLocalStorage("token");
      window.location.assign("/login");
    }
    return Promise.reject(error);
  }
);
