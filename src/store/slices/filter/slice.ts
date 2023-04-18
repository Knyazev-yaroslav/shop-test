import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSlice } from "./types";
import goods from "../../../assets/products.json";

const initialState: IFilterSlice = {
  currentPage: 1,
  dataSize: goods.length,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
