import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux_hooks";
import { selectGoodData } from "../../store/slices/good/selectors";
import categories from "../../assets/brands.json";

import styles from "./index.module.scss";
import GoodBlock from "./components/GoodBlock";
import Pagination from "./components/Pagination";
import { selectFilter } from "../../store/slices/filter/selectors";
import { Product } from "../../utils/mergeProductsAndBrands";
import { setItems } from "../../store/slices/good/slice";

const GoodsPage = () => {
  const { items } = useAppSelector(selectGoodData);
  const { currentPage } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();

  function sortProductsByBrandSort(products: Product[]): Product[] {
    const productsWithBrand = products.filter((product) => product.brandObject);
    const productsWithoutBrand = products.filter(
      (product) => !product.brandObject
    );
    const sortedProductsWithBrand = productsWithBrand.sort((a, b) => {
      const brandSortA = a.brandObject?.sort ?? "";
      const brandSortB = b.brandObject?.sort ?? "";
      return brandSortA.localeCompare(brandSortB);
    });
    return sortedProductsWithBrand.concat(productsWithoutBrand).reverse();
  }

  useEffect(() => {
    dispatch(setItems(sortProductsByBrandSort(items)));
  }, []);

  return (
    <div className={styles.content_wrapper}>
      <div className={styles.sider}>
        <p className={styles.categories}>Категории:</p>
        {categories.map((elem) => {
          return (
            <div key={elem.code}>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    console.log(e);
                  }}
                />
                <span className={styles.checkbox}></span>
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
