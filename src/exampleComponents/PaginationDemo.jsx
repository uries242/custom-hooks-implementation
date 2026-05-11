import { useState } from "react";
import usePagination from "../components/usePagination";

const ALL_ITEMS = Array.from({ length: 123 }, (_, i) => `Item ${i + 1}`);

function PaginationDemo() {
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(ALL_ITEMS.length, itemsPerPage, 1);

  const currentItems = ALL_ITEMS.slice(startIndex, endIndex + 1);

  return (
    <div>
      <h2>Pagination Demo</h2>

      <label>
        Items per page:{" "}
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setPage(1);
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </label>

      <p>Total Items: {ALL_ITEMS.length}</p>

      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button onClick={prevPage} disabled={!canPrevPage}>
        Previous
      </button>
      <span>
        {" "}
        Page {currentPage} of {totalPages}{" "}
      </span>
      <button onClick={nextPage} disabled={!canNextPage}>
        Next
      </button>

      <p>
        Showing items {startIndex + 1} – {endIndex + 1} (Total on this page:{" "}
        {itemsOnCurrentPage})
      </p>
    </div>
  );
}

export default PaginationDemo;
