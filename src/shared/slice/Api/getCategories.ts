import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "src/shared/utils/axiosInstance.ts";
import Cookies from "js-cookie";



export const getCategories = createAsyncThunk<any, never>(
    '',
    async (data, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get('/categories', {
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