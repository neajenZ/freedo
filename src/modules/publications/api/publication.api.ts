import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "src/shared/api";
import { Publication } from "./publication-api.types";

export const publicationApi = createApi({
  reducerPath: "publicationApi",
  baseQuery,
  endpoints: (build) => ({
    publications: build.query<Publication[], void>({
      query: () => ({
        url: "publications",
      }),
    }),
  }),
});

export const { usePublicationsQuery } = publicationApi;
