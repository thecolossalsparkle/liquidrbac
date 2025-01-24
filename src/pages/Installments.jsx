import React, { useState } from 'react';
import InstallmentsHeader from '../components/installments/InstallmentsHeader';
import InstallmentsTable from '../components/installments/InstallmentsTable';
import InstallmentsFilters from '../components/installments/InstallmentsFilters';

const Installments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Installment ID');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [installments, setInstallments] = useState([]);

  return (
    <div className="p-6">
      <InstallmentsHeader />
      <div className="bg-white rounded-lg shadow-sm mt-6">
        <InstallmentsFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
        />
        <InstallmentsTable installments={installments} />
      </div>
    </div>
  );
};

export default Installments; 