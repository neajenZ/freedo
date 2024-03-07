import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: `http://api.freedo.pro`,
    headers: {
        "Content-Type": "application/json"
    },
});