export type TCartItem = {
  type: string;
  id: number;
  sku: string;
  title: string;
  regular_price: {
    currency: string;
    value: number;
  };
  image: string;
  brand: number;
  count: number;
};

export interface ICartSliceState {
  totalPrice: number;
  items: TCartItem[];
}
