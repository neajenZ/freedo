import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "src/shared/api";
export const publicationApi = createApi({
    reducerPath: "publicationApi",
    baseQuery,
    endpoints: (build) => ({
        publications: build.query({
            query: () => ({
                url: "publications",
            }),
        }),
    }),
});
export const { usePublicationsQuery } = publicationApi;
