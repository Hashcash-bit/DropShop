import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/dropshop-68e7f/us-central1/api",
});

export default instance;
