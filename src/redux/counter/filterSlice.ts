import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../app/store";

import { DataItem } from "../../models";

export interface DataState {
  products: [];
  filters: [];
  fCategories: [];
  fRate: [];
}

const initialState: DataState = {
  products: [],
  filters: [],
  fCategories: [],
  fRate: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setData: (
      state: { products: []; filters: [] },
      action: PayloadAction<[]>
    ) => {
      state.products = action.payload;
      state.filters = action.payload;
    },
    filterCategory: (
      state: {
        fCategories: string[];
        fRate: number[];
        filters: [];
        products: [];
      },
      action: PayloadAction<string>
    ) => {
      if (state.fCategories.includes(action.payload)) {
        state.fCategories = state.fCategories.filter(
          (item) => item !== action.payload
        );
      } else {
        state.fCategories = [...state.fCategories, action.payload];
      }

      if (state.fCategories.length <= 0 && state.fRate.length <= 0) {
        state.filters = state.products;
      } else {
        state.filters =
          state.fCategories.length && state.fRate.length
            ? (state.filters.filter((item: DataItem) =>
                state.fCategories.includes(item.category)
              ) as [])
            : state.fRate.length
            ? (state.products.filter((item: DataItem) =>
                state.fRate.includes(Math.floor(item.rating.rate))
              ) as [])
            : (state.products.filter((item: DataItem) =>
                state.fCategories.includes(item.category)
              ) as []);
      }
    },
    filterRate: (
      state: {
        fRate: number[];
        fCategories: string[];
        filters: [];
        products: [];
      },
      action: PayloadAction<number>
    ) => {
      if (state.fRate.includes(action.payload)) {
        state.fRate = state.fRate.filter((item) => item !== action.payload);
      } else {
        state.fRate = [...state.fRate, action.payload];
      }

      if (state.fCategories.length <= 0 && state.fRate.length <= 0) {
        state.filters = state.products;
      } else {
        state.filters =
          state.fCategories.length && state.fRate.length
            ? (state.filters.filter((item: DataItem) =>
                state.fRate.includes(Math.floor(item.rating.rate))
              ) as [])
            : state.fCategories.length
            ? (state.products.filter((item: DataItem) =>
                state.fCategories.includes(item.category)
              ) as [])
            : (state.products.filter((item: DataItem) =>
                state.fRate.includes(Math.floor(item.rating.rate))
              ) as []);
      }
    },
  },
});

export const { setData, filterCategory, filterRate } = filterSlice.actions;

export const filtersData = (state: RootState) => state.filterSlice;

export default filterSlice.reducer;
