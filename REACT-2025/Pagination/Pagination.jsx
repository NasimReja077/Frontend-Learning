import React, { useState, useEffect } from "react";

// Simple Reusable Pagination Component in React (No library)
// Usage Example at bottom

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];

    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) pages.push(i);

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center gap-2 p-4">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>

      <div className="flex gap-1">
        {getPageNumbers().map((num, i) => (
          <button
            key={i}
            onClick={() => typeof num === "number" && goToPage(num)}
            disabled={num === "..."}
            className={`px-3 py-1 rounded ${
              num === currentPage
                ? "bg-blue-600 text-white"
                : num === "..." 
                  ? "bg-gray-200 cursor-default"
                  : "bg-gray-100 hover:bg-gray-300"
            }`}
          >
            {num}
          </button>
        ))}
      </div>

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}

// Example API Pagination
export function ApiPaginationExample() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const totalPages = 20;

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`);
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, [currentPage]);

  return (
    <div className="p-4">
      {loading ? <p>Loading...</p> : (
        <ul className="list-disc ml-4">
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
