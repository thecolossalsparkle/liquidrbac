import React from 'react';
import { FaSearch } from 'react-icons/fa';

const InstallmentsFilters = ({
  searchQuery,
  setSearchQuery,
  selectedFilter,
  setSelectedFilter,
  itemsPerPage,
  setItemsPerPage
}) => {
  const filterOptions = ['Installment ID', 'Vendor Name'];
  const pageOptions = [10, 20, 30, 50];

  return (
    <div className="p-4 border-b flex items-center gap-4">
      <div className="relative flex-1">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search by Vendor Name"
          className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <select
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedFilter}
        onChange={(e) => setSelectedFilter(e.target.value)}
      >
        {filterOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <select
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={itemsPerPage}
        onChange={(e) => setItemsPerPage(Number(e.target.value))}
      >
        {pageOptions.map(option => (
          <option key={option} value={option}>{option} per page</option>
        ))}
      </select>
    </div>
  );
};

export default InstallmentsFilters; 