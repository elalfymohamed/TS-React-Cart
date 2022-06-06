import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface DataState {
  data: [];
  loading: boolean;
}

const initialState: DataState = {
  data: [],
  loading: false,
};

export const dataAsync = createAsyncThunk(
  "allData/fetchData",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const dataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(dataAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(dataAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export const selectData = (state: RootState) => state.dataSlice;

export default dataSlice.reducer;
