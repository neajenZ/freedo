import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "src/shared/api";
export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery,
    endpoints: (build) => ({
        login: build.mutation({
            query: (body) => ({
                url: "users",
                method: "POST",
                body,
            }),
        }),
        register: build.mutation({
            query: (body) => ({
                url: "users/new",
                method: "POST",
                body,
            }),
        }),
    }),
});
export const { useLoginMutation, useRegisterMutation } = authApi;
