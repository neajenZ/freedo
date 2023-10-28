import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "src/shared/api";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: (build) => ({
    // вместо void должен быть тип (в папке auth-api.types.ts)
    login: build.mutation<void, void>({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),
    }),
    register: build.mutation<void, void>({
      query: (body) => ({
        url: "users/new",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
