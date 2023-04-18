import React from "react";
import { useAppSelector } from "../../hooks/redux_hooks";
import { selectGoodData } from "../../store/slices/good/selectors";
import categories from "../../assets/brands.json";

import styles from "./index.module.scss";
import GoodBlock from "./components/GoodBlock";
import Pagination from "./components/Pagination";
import { selectFilter } from "../../store/slices/filter/selectors";

const GoodsPage = () => {
  const { items } = useAppSelector(selectGoodData);
  const { currentPage } = useAppSelector(selectFilter);

  return (
    <div className={styles.content_wrapper}>
      <div className={styles.sider}>
        <p className={styles.categories}>Категории:</p>
        {categories.map((elem) => {
          return (
            <div key={elem.code}>
              <label>
                <input type="checkbox" />
                <span></span>
                {elem.title}
              </label>
            </div>
          );
        })}
      </div>
      <div className={styles.goods_block}>
        <Pagination />
        <div className={styles.goods_list}>
          {items.map((elem, index) => {
            if (index < currentPage * 6 && index >= (currentPage - 1) * 6) {
              return <GoodBlock key={elem.id} good={elem} />;
            } else return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default GoodsPage;
