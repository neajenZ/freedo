import {axiosInstance} from "src/shared/utils/axiosInstance.ts";
import Cookies from "js-cookie";
import {RegisterRequest} from "src/modules/auth/api/auth-api.types.ts";

const api = {
    user: {
        data: () => {
            return axiosInstance.get('/users/info', {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('accessToken')}`
                }
            })
        },
        updateToken: () => {
            return axiosInstance.post('/auth/refresh', {
                refresh_token: Cookies.get('refreshToken')
            })
                .then((res) => {
                    Cookies.set('accessToken', res.data.access_token)
                    Cookies.set('refreshToken', res.data.refresh_token)
                })
        },
        registration: (payload: RegisterRequest) => {
            return axiosInstance.post('/users/new', payload)
        }
    },
    publications: {
        get: (payload = 100) => {
            return axiosInstance.get(`/cards?offset=0&limit=${payload}`, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('accessToken')}`
                }
            })
        }
    }
}

export default api