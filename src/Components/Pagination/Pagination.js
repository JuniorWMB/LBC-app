import React from "react";
import "./pagination.css";

function Pagination({ limit, setPage, count }) {
  const buttonCount = count / limit;
  const button = [];
  //   const handleClickpage = (i) => {
  //     setPage(i);
  //     console.log("test ok");
  //   };

  for (let i = 1; i <= buttonCount; i++) {
    button.push(
      <button
        className="button__pagination"
        onClick={() => {
          setPage(i);
          console.log("test ok ok");
        }}
      >
        {i}
      </button>
    );
  }

  return <div className="button__paginationblock">{button}</div>;
}

export default Pagination;
