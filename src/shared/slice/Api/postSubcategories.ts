import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "src/shared/utils/axiosInstance.ts";
import Cookies from "js-cookie";



interface ICategory {
    name: string
}

export const postSubcategories = createAsyncThunk<any, ICategory>(
    '',
    async (data, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post('/categories', data, {
                headers: {
                    'Authorization': `Bearer ${Cookies.get('accessToken')}`
                }
            })

            return response.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)