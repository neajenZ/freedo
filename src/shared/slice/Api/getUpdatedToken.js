import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "src/shared/utils/axiosInstance.ts";
export const getUpdatedToken = createAsyncThunk('get/update-token', async (data, { rejectWithValue }) => {
    try {
        const response = await axiosInstance.post('/auth/refresh', data);
        return response.data;
    }
    catch (e) {
        return rejectWithValue(e);
    }
});
