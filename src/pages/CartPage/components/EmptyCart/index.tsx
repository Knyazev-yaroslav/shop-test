import React from "react";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className={styles.empty_cart__container}>
      <p className={styles.empty_cart__title}>Корзина пуста</p>
      <p className={styles.empty_cart__subtitle}>Вернуться к покупкам:</p>
      <Link to="/" className={styles.empty_cart__button}>
        Список товаров
      </Link>
    </div>
  );
};

export default EmptyCart;
