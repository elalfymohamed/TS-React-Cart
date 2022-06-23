import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { RootState } from "../app/store";

export interface Items {
  productData: {};
  loading: boolean;
}

const initialState: Items = {
  productData: {},
  loading: false,
};

export const productAsync = createAsyncThunk(
  "product/data",
  async (id: string, thunkAPI) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAsync.fulfilled, (state, action) => {
        state.productData = action.payload;
        state.loading = false;
      });
  },
});

export const selectData = (state: RootState) => state.productSlice;

export default productSlice.reducer;
