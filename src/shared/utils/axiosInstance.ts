import axios from "axios";
import Cookies from "js-cookie";
import { refresh } from "./refresh";

export const axiosInstance = axios.create({
    baseURL: `https://api.freedo.pro`,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Cookies.get('accessToken')}`
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
     // Get token and add it to header "Authorization" from secure storgage
      const token = Cookies.get('accessToken')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }
   );

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error?.config;

        // If the error is a 401 and we have a refresh token, refresh the JWT token
        if (error.response.status === 401) {
            const accessToken = await refresh()
            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`
            return axiosInstance(originalRequest)
        }
    },
)