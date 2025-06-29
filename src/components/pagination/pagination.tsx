import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  onPageChange?: (page: number) => void; // opsional callback pindah halaman
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  function handleClick(e: React.MouseEvent, page: number) {
    e.preventDefault();
    if (onPageChange) onPageChange(page);
  }

  return (
    <nav className="flex justify-center items-center space-x-2 mt-8">
      {currentPage > 1 && (
        <a
          href={`${basePath}?page=${currentPage - 1}`}
          onClick={(e) => handleClick(e, currentPage - 1)}
          className="p-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-zinc-700 dark:text-gray-200 dark:hover:bg-zinc-600"
          aria-label="Previous Page"
        >
          {/* ChevronLeftIcon svg */}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </a>
      )}

      {pages.map((page) => (
        <a
          key={page}
          href={`${basePath}?page=${page}`}
          onClick={(e) => handleClick(e, page)}
          className={`px-4 py-2 rounded-lg ${currentPage === page
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-zinc-700 dark:text-gray-200 dark:hover:bg-zinc-600"
            }`}
        >
          {page}
        </a>
      ))}

      {currentPage < totalPages && (
        <a
          href={`${basePath}?page=${currentPage + 1}`}
          onClick={(e) => handleClick(e, currentPage + 1)}
          className="p-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-zinc-700 dark:text-gray-200 dark:hover:bg-zinc-600"
          aria-label="Next Page"
        >
          {/* ChevronRightIcon svg */}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </nav>
  );
}
