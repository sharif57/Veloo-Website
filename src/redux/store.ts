import { configureStore } from "@reduxjs/toolkit";
import baseApi from "./Api/baseApi";
import { chatApi } from "./feature/chatSlice";
import authUISlice from "./feature/authUISlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [chatApi.reducerPath]: chatApi.reducer,
    authUI: authUISlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware).concat(chatApi.middleware),
});

export default store;
export type AppDispatch = typeof store.dispatch;
