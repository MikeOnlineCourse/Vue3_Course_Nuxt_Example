import axios from "axios";

const photo = axios.create({
  baseURL: "https://vue-lessons-api.herokuapp.com/"
});
photo.interceptors.request.use(
  config => {
    console.log("請求發起前", config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

photo.interceptors.response.use(
  response => {
    console.log("請求發起後", response);
    if (response.data.length < 9) {
      throw "資料沒有大於10筆";
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export const getphotoData = () => photo.get("/photo/list");
