import { AxiosResponse } from "axios";
import { TCartItem } from "../store/slices/cart/types";

export interface IPostGoodsRequest {
  username: string;
  phone_number: string;
  goods: TCartItem[];
}

export interface IPostGoodsOK {
  result: "ok";
}
export interface IPostGoodsError {
  result: "error";
}

export type TResponse<T> = Promise<AxiosResponse<T>>;
