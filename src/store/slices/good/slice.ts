import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TGoodObject, IGoodSliceState } from "./types";
import goods from "../../../assets/products.json";

const initialState: IGoodSliceState = {
  items: goods,
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
