import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "src/shared/api";
export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery,
    endpoints: (build) => ({
        user: build.query({
            query: () => ({
                url: "user",
            }),
        }),
    }),
});
export const { useUserQuery } = userApi;
