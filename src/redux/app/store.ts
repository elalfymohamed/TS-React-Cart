import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../counter/dataSlice";
import categoriesSlice from "../counter/categoriesSlice";

export const store = configureStore({
  reducer: {
    dataSlice: dataSlice,
    categoriesSlice: categoriesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
