import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "src/modules/auth";
import { publicationApi } from "src/modules/publications/api/publication.api";

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [publicationApi.reducerPath]: publicationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      publicationApi.middleware
    ),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
