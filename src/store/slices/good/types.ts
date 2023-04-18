export type TGoodObject = {
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
};

export type TSearchGoodParams = {
  title: string;
  search: string;
  currentPage: number;
};

export interface IGoodSliceState {
  items: TGoodObject[];
}
