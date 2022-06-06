import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dataSlice from "../counter/dataSlice";

export const store = configureStore({
  reducer: {
    dataSlice: dataSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
