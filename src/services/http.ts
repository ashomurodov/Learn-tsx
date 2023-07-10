import axios from "axios";

const baseURL = "http://localhost:4000/api";

export const http = axios.create({ baseURL });
