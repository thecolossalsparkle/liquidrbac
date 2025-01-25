import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const TablePagination = ({ 
  totalEntries, 
  entriesPerPage, 
  currentPage,
  onEntriesPerPageChange,
  onPageChange
}) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);
  const startEntry = totalEntries === 0 ? 0 : (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  return (
    <div className="px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Show entries:</span>
        <select
          className="border rounded px-2 py-1 text-sm"
          value={entriesPerPage}
          onChange={(e) => onEntriesPerPageChange(Number(e.target.value))}
        >
          {[10, 25, 50, 100].map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
          <option value={totalEntries}>All</option>
        </select>
      </div>
      
      <div className="text-sm text-gray-600">
        Showing {startEntry} to {endEntry} of {totalEntries} entries
      </div>
      
      <div className="flex gap-2">
        <button
          className="p-1 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <ChevronLeftIcon className="h-5 w-5 text-gray-600" />
        </button>
        <button
          className="p-1 rounded-md border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <ChevronRightIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TablePagination; 