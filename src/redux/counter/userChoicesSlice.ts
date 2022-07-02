import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../app/store";

import { DataItem, ItemsCart } from "../../models";

export interface Items {
  cart: DataItem[];
  heart: DataItem[];
}

const initialState: Items = {
  cart: [],
  heart: [],
};

export const userChoicesSlice = createSlice({
  name: "choices",
  initialState,
  reducers: {
    setCart: (
      state: { cart: DataItem[] },
      action: PayloadAction<ItemsCart>
    ) => {
      const checkID = state.cart.some(
        (item) => item.id === action.payload.product.id
      ) as boolean;
      if (checkID) {
        state.cart = state.cart.map((item: DataItem) => {
          if (item.id === action.payload.product.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.quantity,
            };
          } else {
            return item;
          }
        }) as [];
      } else {
        state.cart = [
          ...state.cart,
          { ...action.payload.product, quantity: action.payload.quantity },
        ];
      }
    },
    setHeart: (
      state: { heart: DataItem[] },
      action: PayloadAction<DataItem>
    ) => {
      const checkID = state.heart.some(
        (item) => item.id === action.payload.id
      ) as boolean;
      if (checkID) {
        state.heart = state.heart.filter(
          (item) => item.id !== action.payload.id
        ) as DataItem[];
      } else {
        state.heart = [...state.heart, { ...action.payload }];
      }
    },
  },
});

export const { setCart, setHeart } = userChoicesSlice.actions;

export const choicesData = (state: RootState) => state.userChoicesSlice;

export default userChoicesSlice.reducer;
