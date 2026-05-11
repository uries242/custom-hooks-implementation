import { useState } from "react";

function usePagination(totalItems, itemsPerPage = 10, initialPage = 1) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(
    Math.min(Math.max(initialPage, 1), totalPages),
  );

  const setPage = (pageNumber) => {
    const clamped = Math.min(Math.max(pageNumber, 1), totalPages);
    setCurrentPage(clamped);
  };

  const nextPage = () => setPage(currentPage + 1);
  const prevPage = () => setPage(currentPage - 1);

  const canNextPage = currentPage < totalPages;
  const canPrevPage = currentPage > 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems) - 1;
  const itemsOnCurrentPage = endIndex - startIndex + 1;

  return {
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
  };
}

export default usePagination;
