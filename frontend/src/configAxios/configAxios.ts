import axios from "axios";

const configAxios = axios.create({
  baseURL: "http://localhost:4200/api",
});

export default configAxios;
