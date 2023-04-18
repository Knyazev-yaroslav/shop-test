import { TCartItem } from "../store/slices/cart/types";
import { calcTotalPrice } from "./calcTotalPrice";
export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = Number(calcTotalPrice(items).toFixed(2));

  return {
    items: items as TCartItem[],
    totalPrice,
  };
};
