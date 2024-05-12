import { axiosInstance } from "src/shared/utils/axiosInstance.ts";
import axios from "axios";
const url = 'https://api.freedo.pro';
const api = {
    user: {
        data: () => {
            return axiosInstance.get('/users/info');
        },
        getResetPassword: (data) => {
            return axios.post(`${url}/forgot-password`, {}, {
                params: data
            });
        },
        registration: (payload) => {
            return axios.post('/forgot-password', payload);
        }
    },
    publications: {
        get: ({ offset, limit }) => {
            return axiosInstance.get(`/cards?offset=${offset}&limit=${limit}`);
        },
        getData: (id) => {
            return axiosInstance.get(`/cards/${id}`);
        }
    },
    categories: {
        get: () => {
            return axiosInstance.get(`/categories`);
        },
        getChildrens: (name) => {
            return axiosInstance.get(`/categories/${name}/subcategories`);
        }
    },
    comments: {
        create: (payload) => {
            return axiosInstance.post(`/comments`, payload);
        },
        getByPublication: (id, limit) => {
            return axiosInstance.get(`/comments/card/${id}?offset=0&limit=${limit}`);
        },
        getByUser: (id) => {
            return axiosInstance.get(`/comments/user/${id}?offset=0&limit=100`);
        }
    }
};
export default api;
