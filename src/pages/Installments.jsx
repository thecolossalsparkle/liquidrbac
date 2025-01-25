import React, { useState } from 'react';
import InstallmentsHeader from '../components/installments/InstallmentsHeader';
import InstallmentsTable from '../components/installments/InstallmentsTable';
import InstallmentsFilters from '../components/installments/InstallmentsFilters';

const Installments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Installment ID');
  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  // Sample data for testing
  const [installments] = useState([
    {
      id: "INS001",
      vendorName: "Tech Solutions Ltd.",
      invoiceNumber: "INV/2024/001",
      selectedDate: "2024-03-15",
      dueDate: "2024-04-15",
      amount: "₹45,000"
    },
    {
      id: "INS002",
      vendorName: "Global Services Inc.",
      invoiceNumber: "INV/2024/002",
      selectedDate: "2024-03-18",
      dueDate: "2024-04-18",
      amount: "₹32,500"
    },
    {
      id: "INS003",
      vendorName: "Digital Systems",
      invoiceNumber: "INV/2024/003",
      selectedDate: "2024-03-20",
      dueDate: "2024-04-20",
      amount: "₹78,900"
    },
    {
      id: "INS004",
      vendorName: "InfoTech Solutions",
      invoiceNumber: "INV/2024/004",
      selectedDate: "2024-03-22",
      dueDate: "2024-04-22",
      amount: "₹25,750"
    },
    {
      id: "INS005",
      vendorName: "Cloud Services Pro",
      invoiceNumber: "INV/2024/005",
      selectedDate: "2024-03-25",
      dueDate: "2024-04-25",
      amount: "₹93,200"
    }
  ]);

  return (
    <div className="p-3 sm:p-4 md:p-6">
      <InstallmentsHeader />
      <div className="bg-white rounded-lg shadow-sm mt-4 sm:mt-6">
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