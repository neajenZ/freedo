import {createAsyncThunk} from "@reduxjs/toolkit";
import {axiosInstance} from "src/shared/utils/axiosInstance.ts";


export const getPublications = createAsyncThunk<any, any>(
    `publications/get`,
    async (_data, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get('/publications')

            return response.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)