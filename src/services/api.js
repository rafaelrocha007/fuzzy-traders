import axios from "axios";

const api = axios.create({
  baseURL: "https://fuzzy-traders-api.herokuapp.com",
});

export default api;
