import axios from "axios";
import {
  IPostGoodsError,
  IPostGoodsOK,
  IPostGoodsRequest,
  TResponse,
} from "./types";

export type TPostGoodsResponse = IPostGoodsOK | IPostGoodsError;

export const postGoods = (
  data: IPostGoodsRequest
): TResponse<TPostGoodsResponse> =>
  axios.request({
    baseURL: "https://app.aaccent.su/js/confirm.php",
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    data: data,
  });
