import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PaginationState } from "../../types/newsroom";

interface NewsPaginationProps {
  pagination: PaginationState;
  onPageChange: (page: number) => void;
  totalItems: number;
}

export function NewsPagination({ pagination, onPageChange, totalItems }: NewsPaginationProps) {
  const { currentPage, totalPages } = pagination;
  const startItem = (currentPage - 1) * pagination.itemsPerPage + 1;
  const endItem = Math.min(currentPage * pagination.itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage <= 3) {
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-col items-center gap-4 pt-6 sm:flex-row sm:justify-between border-t border-white/[0.05]">
      <p className="text-[0.75rem] text-gray-500">
        <span className="text-white/70 font-medium">
          {startItem}–{endItem}
        </span>{" "}
        of <span className="text-white/70 font-medium">{totalItems}</span>
      </p>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="rounded-lg border border-white/[0.07] p-2 text-white/50 transition-all duration-200 hover:border-accent/30 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-white/[0.07] disabled:hover:text-white/50"
          aria-label="Previous page"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex gap-1">
          {getPageNumbers().map((page, idx) =>
            typeof page === "number" ? (
              <button
                key={idx}
                onClick={() => onPageChange(page)}
                className={`min-w-[34px] rounded-lg px-2 py-1.5 text-[0.75rem] font-medium transition-all duration-200 ${
                  page === currentPage
                    ? "bg-accent text-dark"
                    : "text-white/40 hover:text-white/80 hover:bg-white/[0.04]"
                }`}
              >
                {page}
              </button>
            ) : (
              <span key={idx} className="flex items-center px-1 text-[0.6875rem] text-gray-600">
                …
              </span>
            )
          )}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="rounded-lg border border-white/[0.07] p-2 text-white/50 transition-all duration-200 hover:border-accent/30 hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-white/[0.07] disabled:hover:text-white/50"
          aria-label="Next page"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
