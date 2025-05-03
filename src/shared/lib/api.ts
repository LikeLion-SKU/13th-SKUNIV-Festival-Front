import axios from "axios";

const publicAPI = axios.create({
  baseURL: "https://api.2025skufestival.site/api/",
});

const adminAPI = axios.create({
  baseURL: "https://api.2025skufestival.site/api/",
  withCredentials: false, // TODO dev only
});

export { publicAPI, adminAPI };
