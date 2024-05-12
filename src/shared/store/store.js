import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "src/modules/auth";
import { publicationApi } from "src/modules/publications";
import { userApi } from "src/modules/user";
import UserSlice from "src/shared/slice/user-slice.ts";
import CategoriesSlice from 'src/shared/slice/categories-slice.ts';
import PublicationsSlice from "src/shared/slice/publications-slice.ts";
const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [publicationApi.reducerPath]: publicationApi.reducer,
        userSlice: UserSlice,
        categoriesSlice: CategoriesSlice,
        publicationsSlice: PublicationsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, publicationApi.middleware, userApi.middleware),
});
export default store;
