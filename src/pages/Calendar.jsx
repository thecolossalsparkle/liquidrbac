import React, { useState } from 'react';
import Calendar from '../components/calendar/Calendar';
import MonthYearPicker from '../components/calendar/MonthYearPicker';
import InstallmentTable from '../components/calendar/InstallmentTable';
import Card from '../components/common/Card';
import TablePagination from '../components/common/TablePagination';

const Installments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample installment data for January 2025
  const sampleInstallmentData = {
    '2025-01-05': [
      {
        invoiceNumber: 'INV-001',
        date: '2025-01-05',
        amount: '$1,500',
        status: 'Pending',
        vendorName: 'Tech Solutions Inc',
        totalAmount: '$4,500'
      },
      {
        invoiceNumber: 'INV-002',
        date: '2025-01-05',
        amount: '$2,000',
        status: 'Paid',
        vendorName: 'Office Supplies Co',
        totalAmount: '$2,000'
      }
    ],
    '2025-01-15': [
      {
        invoiceNumber: 'INV-003',
        date: '2025-01-15',
        amount: '$3,000',
        status: 'Pending',
        vendorName: 'Marketing Pro',
        totalAmount: '$9,000'
      }
    ],
    '2025-01-20': [
      {
        invoiceNumber: 'INV-004',
        date: '2025-01-20',
        amount: '$1,800',
        status: 'Overdue',
        vendorName: 'IT Services Ltd',
        totalAmount: '$5,400'
      },
      {
        invoiceNumber: 'INV-005',
        date: '2025-01-20',
        amount: '$2,500',
        status: 'Paid',
        vendorName: 'Equipment Corp',
        totalAmount: '$2,500'
      }
    ],
    '2025-01-25': [
      {
        invoiceNumber: 'INV-006',
        date: '2025-01-25',
        amount: '$4,000',
        status: 'Pending',
        vendorName: 'Consulting Group',
        totalAmount: '$12,000'
      }
    ]
  };

  const [installments, setInstallments] = useState([]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Format the date to match our sample data keys
    const dateKey = date.toISOString().split('T')[0];
    // Set installments for the selected date (or empty array if no data)
    setInstallments(sampleInstallmentData[dateKey] || []);
    // Reset to first page when date changes
    setCurrentPage(1);
  };

  const handleMonthChange = (month) => {
    setCurrentMonth(parseInt(month));
    setInstallments([]);
    setCurrentPage(1);
  };

  const handleYearChange = (year) => {
    setCurrentYear(parseInt(year));
    setInstallments([]);
    setCurrentPage(1);
  };

  // Calculate pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = installments.slice(indexOfFirstEntry, indexOfLastEntry);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900">
          INSTALLMENTS
        </h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Calendar Section */}
        <div className="lg:col-span-5">
          <Card className="h-full">
            <Calendar
              selectedDate={selectedDate}
              onDateSelect={handleDateSelect}
              currentMonth={currentMonth}
              currentYear={currentYear}
            />
            
            <MonthYearPicker
              month={currentMonth}
              year={currentYear}
              onMonthChange={handleMonthChange}
              onYearChange={handleYearChange}
            />

            <div className="mt-6 px-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <span className="font-medium whitespace-nowrap">SELECTED DATE:</span>
                <input
                  type="text"
                  value={selectedDate.toLocaleDateString()}
                  readOnly
                  className="w-full sm:w-auto border rounded px-3 py-1.5 bg-gray-50"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Table Section */}
        <div className="lg:col-span-7">
          <Card className="h-full overflow-hidden">
            <InstallmentTable installments={currentEntries} />
            
            {installments.length > 0 && (
              <TablePagination
                totalEntries={installments.length}
                entriesPerPage={entriesPerPage}
                currentPage={currentPage}
                onEntriesPerPageChange={(value) => {
                  setEntriesPerPage(value);
                  setCurrentPage(1);
                }}
                onPageChange={setCurrentPage}
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Installments; 