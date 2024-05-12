import axios from "axios"
import Cookies from "js-cookie"

export const refresh = async () => {
    console.log('refresh')
    try {
        const response = await axios.post(`https://api.freedo.pro/auth/refresh`, {
            refresh_token: Cookies.get('refreshToken')
        })
        Cookies.set('accessToken', response.data.access_token)
        Cookies.set('refreshToken', response.data.refresh_token)
        return response.data.access_token
    } catch (e) {
        return Promise.reject(e)
    }
}