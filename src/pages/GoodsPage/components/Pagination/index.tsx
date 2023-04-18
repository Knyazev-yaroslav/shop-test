/* eslint-disable react/button-has-type */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux_hooks";
import style from "./Pagination.module.scss";
import prev_arrow from "../../../../assets/svg/prev-pagination-arrow.svg";
import next_arrow from "../../../../assets/svg/next-pagination-arrow.svg";
import { selectFilter } from "../../../../store/slices/filter/selectors";
import { setCurrentPage } from "../../../../store/slices/filter/slice";

const Pagination = () => {
  const goodsPerPage = 6;
  const { currentPage, dataSize } = useAppSelector(selectFilter);
  const lastGoodIndex = currentPage * goodsPerPage;
  const firstGoodIndex = lastGoodIndex - goodsPerPage + 1;
  const pageNumbers = [];
  const totalPages = Math.ceil(dataSize / goodsPerPage);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.search) {
      const param = window.location.search.substring(13);
      dispatch(setCurrentPage(Number(param)));
    }
  }, []);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    dispatch(setCurrentPage(currentPage + 1));
  };
  const prevPage = () => {
    dispatch(setCurrentPage(currentPage - 1));
  };

  useEffect(() => {
    navigate(`?currentPage=${currentPage}`);
  }, [currentPage]);

  return dataSize ? (
    <div className={style.pagination}>
      <p>
        {firstGoodIndex}—{Math.min(lastGoodIndex, dataSize)} из {dataSize}
      </p>
      <button disabled={currentPage === pageNumbers[0]} onClick={prevPage}>
        <img src={prev_arrow} alt="prev" />
      </button>
      <button
        disabled={currentPage === pageNumbers[pageNumbers.length - 1]}
        onClick={nextPage}
      >
        <img src={next_arrow} alt="next" />
      </button>
    </div>
  ) : (
    <div>Загрузка...</div>
  );
};

export default Pagination;
