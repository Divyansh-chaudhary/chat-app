import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import globalReducer from "./features/globalSlice";

export const store = configureStore({
  reducer: {
    globalReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
