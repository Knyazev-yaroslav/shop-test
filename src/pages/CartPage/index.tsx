import React, { FormEvent, useState } from "react";
import styles from "./index.module.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import { selectCart } from "../../store/slices/cart/selectors";
import { clearItems } from "../../store/slices/cart/slice";
import CartItem from "./components/CartItem";
import { postGoods } from "../../api/postGoods";
import Modal from "./components/Modal";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./components/EmptyCart";

const CartPage = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { totalPrice, items } = useAppSelector(selectCart);
  const navigate = useNavigate();
  const totalCount = items.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  const onClickClear = () => {
    if (window.confirm("Очистить корзину?")) {
      dispatch(clearItems());
    }
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
    dispatch(clearItems());
    navigate("/");
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await postGoods({
      goods: items,
      username: username,
      phone_number: phoneNumber,
    })
      .then(() => setIsModalOpen(true))
      .catch(() => {
        alert("Ошибка при оформлении заказа, попробуйте позже");
      });
  };

  return (
    <div>
      {totalPrice ? (
        <div className={styles.cart_container}>
          <div className={styles.clear_button} onClick={onClickClear}>
            <span>Очистить корзину</span>
          </div>
          <div className={styles.content_container}>
            <div className={styles.cart_items_container}>
              <div className={styles.total_count}>
                <span>
                  Всего товаров: <b>{totalCount} шт.</b>
                </span>
                <span>
                  Сумма заказа: <b>{totalPrice.toFixed(2)} USD</b>
                </span>
              </div>
              <div className={styles.cart_items}>
                {items.map((item) => (
                  <CartItem key={item.id} {...item} />
                ))}
              </div>
            </div>
            <div className={styles.form_container}>
              <form action="submit" onSubmit={onSubmit}>
                <p className={styles.form_text}>Введите данные</p>
                <div className={styles.name}>
                  <p>Ваше имя</p>
                  <input
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    required
                    type="text"
                    placeholder="Ф.И.О."
                  />
                </div>
                <div className={styles.phone_number}>
                  <p>Телефон</p>
                  <input
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    required
                    type="text"
                    placeholder="+7(9XX) XXX-XX-XX"
                    pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
                    maxLength={17}
                  />
                </div>
                <button className={styles.submit_button} type="submit">
                  Оформить заказ
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
      <Modal isModalOpen={isModalOpen} onClose={onCloseModal} />
    </div>
  );
};

export default CartPage;
