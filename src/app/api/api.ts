import {axiosInstance} from "src/shared/utils/axiosInstance.ts";
import {RegisterRequest} from "src/modules/auth/api/auth-api.types.ts";
import {IRootCategory, ISubcategory} from "../types/categories";
import {IComment, ICreateComment} from "../types/comments";
import {Publication} from "src/modules/publications/api/publication-api.types.ts";
import { IUserData } from "../types/user";
import axios from "axios";


interface IPublicationGet {
    limit: number,
    offset: number
}

interface IResetPassword {
    email: string
}

const url = 'https://api.freedo.pro'

const api = {
    user: {
        data: () => {
            return axiosInstance.get<IUserData>('/users/info')
        },
        getResetPassword: (data: IResetPassword) => {
            return axios.post(`${url}/forgot-password`, {

            }, {
                params: data
            })
        },
        registration: (payload: RegisterRequest) => {
            return axios.post('/forgot-password', payload)
        }
    },
    publications: {
        get: ({offset, limit}: IPublicationGet) => {
            return axiosInstance.get<Publication[]>(`/cards?offset=${offset}&limit=${limit}`)
        },
        getData: (id: string) => {
            return axiosInstance.get<Publication>(`/cards/${id}`)
        }

    },
    categories: {
        get: () => {
            return axiosInstance.get<IRootCategory[]>(`/categories`)
        },
        getChildrens: (name?: string) => {
            return axiosInstance.get<ISubcategory>(`/categories/${name}/subcategories`)
        }
    },
    comments: {
        create: (payload: ICreateComment) => {
            return axiosInstance.post(`/comments`, payload)
        },
        getByPublication: (id: string, limit: number) => {
            return axiosInstance.get<IComment[]>(`/comments/card/${id}?offset=0&limit=${limit}`)
        },
        getByUser: (id: string) => {
            return axiosInstance.get<IComment[]>(`/comments/user/${id}?offset=0&limit=100`)
        }
    }
}

export default api