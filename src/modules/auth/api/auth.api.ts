import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "src/shared/api";
import { RegisterRequest, LoginRequest } from "./auth-api.types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (build) => ({
    login: build.mutation<void, LoginRequest>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
    }),
    register: build.mutation<void, RegisterRequest>({
      query: (body) => ({
        url: "users/new",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
