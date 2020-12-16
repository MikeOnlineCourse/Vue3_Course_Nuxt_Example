import axios from "axios";

const authRequest = axios.create({
  baseURL: "https://vue-lessons-api.herokuapp.com/"
});

export const postLoginRequest = data => authRequest.post("/login", data);

export const postTestToken = token => {
  authRequest.defaults.headers.common["Authorization"] = token;
  return authRequest.post("/testToken");
};
