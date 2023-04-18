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
    data: data,
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
  });
