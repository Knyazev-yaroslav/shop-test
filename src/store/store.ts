import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cart/slice";
import good from "./slices/good/slice";
import filter from "./slices/filter/slice";

export const store = configureStore({
  reducer: {
    cart,
    good,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
