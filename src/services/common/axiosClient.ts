import axios from "axios";

export const axiosClient = axios.create();

axiosClient.interceptors.request.use();
