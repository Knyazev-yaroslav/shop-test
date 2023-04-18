import React, { FC } from "react";
import { useAppDispatch } from "../../../../hooks/redux_hooks";
import {
  addItem,
  minusItem,
  removeItem,
} from "../../../../store/slices/cart/slice";
import { TCartItem } from "../../../../store/slices/cart/types";

import styles from "./index.module.scss";

const CartItem: FC<TCartItem> = ({
  type,
  id,
  sku,
  title,
  regular_price,
  image,
  brand,
  count,
}) => {
  const dispatch = useAppDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as TCartItem)
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  const onClickRemove = () => {
    if (window.confirm("Ты действительно хочешь удалить товар?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={styles.cart_item}>
      <div>
        <img
          className={styles.cart_item__img}
          src={require(`../../../../assets${image}`)}
          alt="Good"
        />
      </div>
      <div>
        <h3>{title}</h3>
      </div>
      <div className={styles.counter_container}>
        <button
          className={styles.counter_button}
          disabled={count === 1}
          onClick={onClickMinus}
        >
          -
        </button>
        <b>{count}</b>
        <button className={styles.counter_button} onClick={onClickPlus}>
          +
        </button>
      </div>
      <div>
        <b>
          {(regular_price.value * count).toFixed(2)} {regular_price.currency}
        </b>
      </div>
      <button className={styles.counter_button} onClick={onClickRemove}>
        x
      </button>
    </div>
  );
};

export default CartItem;
