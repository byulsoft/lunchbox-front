import axios from "axios";

const service = axios.create({
  baseURL: "/api",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json;charset=utf-8"
  }
});

export default service;
