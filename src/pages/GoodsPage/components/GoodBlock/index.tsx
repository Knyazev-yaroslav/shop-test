import React, { FC } from "react";
import { TCartItem } from "../../../../store/slices/cart/types";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux_hooks";
import { selectCartItemById } from "../../../../store/slices/cart/selectors";
import { addItem } from "../../../../store/slices/cart/slice";

import styles from "./index.module.scss";

type TGoodBlock = {
  good: {
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
};

const GoodBlock: FC<TGoodBlock> = (good) => {
  const { id, regular_price, image, title } = good.good;
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector(selectCartItemById(id));

  const addedCount = cartItem ? cartItem.count : 0;

  const onClickAdd = () => {
    const item: TCartItem = {
      ...good.good,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.good_container}>
      <img
        className={styles.good_img}
        src={require(`../../../../assets${image}`)}
        alt={title}
      />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>
        {regular_price.value} {regular_price.currency}
      </p>
      <button className={styles.button} onClick={onClickAdd}>
        <span className={styles.button_text}>+ Добавить</span>
        <span className={styles.goods_amount}>
          {addedCount > 0 && <i>{addedCount}</i>}
        </span>
      </button>
    </div>
  );
};

export default GoodBlock;
