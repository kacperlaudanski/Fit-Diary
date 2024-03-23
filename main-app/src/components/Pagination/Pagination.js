import React from "react";
import styles from "./styles/pagination.module.css";

export default function Pagination({
  totalLength,
  trainingsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalLength / trainingsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.container}>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              setCurrentPage(page);
              window.scrollTo(0, 0);
            }}
            className={`${styles.page_button} ${
              page === currentPage ? styles.active : ""
            }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
