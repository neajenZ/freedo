import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "src/shared/api";
import { UserResponse } from "../types/user-api.types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  endpoints: (build) => ({
    user: build.query<UserResponse, void>({
      query: () => ({
        url: "user",
      }),
    }),
  }),
});

export const { useUserQuery } = userApi;
