import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TGoodObject, IGoodSliceState } from "./types";
import goods from "../../../assets/products.json";
import brands from "../../../assets/brands.json";
import { mergeProductsAndBrands } from "../../../utils/mergeProductsAndBrands";

const initialState: IGoodSliceState = {
  items: mergeProductsAndBrands(goods, brands),
};

const goodSlice = createSlice({
  name: "good",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<TGoodObject[]>) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = goodSlice.actions;

export default goodSlice.reducer;
