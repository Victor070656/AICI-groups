"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function Pagination({ totalPages = 8 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page:any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center p-4 mt-8 gap-1">
      {/* Previous Button */}
      <button
        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex size-10 items-center justify-center text-gray-700  hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Page 1 */}
      <button
        onClick={() => handlePageChange(1)}
        className={`text-sm font-medium leading-normal flex size-10 items-center justify-center rounded-full transition-colors ${
          currentPage === 1
            ? "bg-blue-800 text-white font-bold"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        1
      </button>

      {/* Page 2 */}
      <button
        onClick={() => handlePageChange(2)}
        className={`text-sm font-medium leading-normal flex size-10 items-center justify-center rounded-full transition-colors ${
          currentPage === 2
            ? "bg-blue-800 text-white font-bold"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        2
      </button>

      {/* Page 3 */}
      <button
        onClick={() => handlePageChange(3)}
        className={`text-sm font-medium leading-normal flex size-10 items-center justify-center rounded-full transition-colors ${
          currentPage === 3
            ? "bg-blue-800 text-white font-bold"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        3
      </button>

      {/* Ellipsis */}
      {currentPage > 4 && currentPage < totalPages - 3 ? (
        <>
          <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-700">
            ...
          </span>
          <button className="text-sm font-bold leading-normal flex size-10 items-center justify-center rounded-full bg-blue-800 text-white">
            {currentPage}
          </button>
        </>
      ) : (
        <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-gray-700">
          ...
        </span>
      )}

      {/* Last 3 pages */}
      <button
        onClick={() => handlePageChange(8)}
        className={`text-sm font-medium leading-normal flex size-10 items-center justify-center rounded-full transition-colors ${
          currentPage === 8
            ? "bg-blue-800 text-white font-bold"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        8
      </button>

      <button
        onClick={() => handlePageChange(9)}
        className={`text-sm font-medium leading-normal flex size-10 items-center justify-center rounded-full transition-colors ${
          currentPage === 9
            ? "bg-blue-800 text-white font-bold"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        9
      </button>

      <button
        onClick={() => handlePageChange(10)}
        className={`text-sm font-medium leading-normal flex size-10 items-center justify-center rounded-full transition-colors ${
          currentPage === 10
            ? "bg-blue-800 text-white font-bold"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        10
      </button>

      {/* Next Button */}
      <button
        onClick={() =>
          currentPage < totalPages && handlePageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="flex size-10 items-center justify-center text-gray-700 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
