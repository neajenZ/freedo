import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "src/shared/utils/axiosInstance.ts";
export const getCategories = createAsyncThunk('get/categories', async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.get('/categories', {
            headers: {
                'Authorization': `Bearer ${data}`
            }
        });
        return response.data;
    }
    catch (e) {
        return rejectWithValue(e);
    }
});
