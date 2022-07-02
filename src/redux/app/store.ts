import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../counter/dataSlice";
import categoriesSlice from "../counter/categoriesSlice";
import productSlice from "../counter/productSlice";
import filterSlice from "../counter/filterSlice";
import userChoicesSlice from "../counter/userChoicesSlice";

export const store = configureStore({
  reducer: {
    dataSlice,
    categoriesSlice,
    productSlice,
    filterSlice,
    userChoicesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
