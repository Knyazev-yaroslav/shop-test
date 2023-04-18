type TBrand = {
  id: number;
  title: string;
  sort: string;
  code: string;
};

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
  brandObject?: TBrand;
};

export type TSearchGoodParams = {
  title: string;
  search: string;
  currentPage: number;
};

export interface IGoodSliceState {
  items: TGoodObject[];
}
