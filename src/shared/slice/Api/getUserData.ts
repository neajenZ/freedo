import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "src/shared/utils/axiosInstance.ts";


export const getUserData = createAsyncThunk<any, any>(
    'get/userData',
    async (data, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post('/users/info', {
                headers: {
                    'Authorization': `Bearer ${data}`
                }
            })

            return response.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)