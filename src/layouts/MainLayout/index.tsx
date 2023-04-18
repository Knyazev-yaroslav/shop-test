import React, { useEffect, useRef } from "react";

import styles from "./index.module.scss";
import { Link, Outlet, useLocation } from "react-router-dom";

import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg";
import { useAppSelector } from "../../hooks/redux_hooks";
import { selectCart } from "../../store/slices/cart/selectors";

const MainLayout = () => {
  const { totalPrice, items } = useAppSelector(selectCart);
  const location = useLocation();
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link to="/" className={styles.header_text}>
          Магазин одежды
        </Link>
        {location.pathname !== "/cart" && (
          <div className={styles.header_rightside}>
            {totalPrice.toFixed(2) + " USD"}
            <Link to="/cart" className={styles.cart_link}>
              Корзина <CartIcon />
            </Link>
          </div>
        )}
      </div>
      <div className={styles.content_wrapper}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
