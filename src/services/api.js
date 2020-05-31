import axios from "axios";

const api = axios.create({
  //baseURL: "https://fuzzy-traders-api.herokuapp.com",
  baseURL: "http://localhost:8000",
});

export default api;
