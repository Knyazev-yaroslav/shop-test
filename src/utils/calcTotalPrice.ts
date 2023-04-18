import { TCartItem } from "../store/slices/cart/types";

export const calcTotalPrice = (items: TCartItem[]) => {
  return items.reduce((sum, obj) => {
    return obj.regular_price.value * obj.count + sum;
  }, 0);
};
