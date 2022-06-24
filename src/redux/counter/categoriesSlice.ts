import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface Items {
  categories: [];
  loading: boolean;
  error: string;
}

const initialState: Items = {
  categories: [],
  loading: false,
  error: "",
};

export const categoriesAsync = createAsyncThunk(
  "categoriesAsync/categories",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/categories`);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(categoriesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(categoriesAsync.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(categoriesAsync.rejected, (state) => {
        state.error = "error server";
      });
  },
});

export const selectData = (state: RootState) => state.categoriesSlice;

export default categoriesSlice.reducer;
