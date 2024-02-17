import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "src/shared/utils/axiosInstance.ts";


export const postRegistration = createAsyncThunk<any, any>(
    'post/registration',
    async (data, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post('/users/new', data)

            return response.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)