import React, { FC } from "react";
import styles from "./index.module.scss";
import ReactDOM from "react-dom";

type TModal = {
  isModalOpen: boolean;
  onClose: () => void;
};

const Modal: FC<TModal> = ({ isModalOpen, onClose }) => {
  if (!isModalOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.modal__container}>
      <div className={styles.modal__body}>
        <div className={styles.modal__body__container}>
          <p className={styles.modal__text}>Вы успешно оформили заказ!</p>
          <button className={styles.modal__close_button} onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
