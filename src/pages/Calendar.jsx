import React, { useState } from 'react';
import Calendar from '../components/calendar/Calendar';
import MonthYearPicker from '../components/calendar/MonthYearPicker';
import InstallmentTable from '../components/calendar/InstallmentTable';
import Card from '../components/common/Card';
import TablePagination from '../components/common/TablePagination';

const Installments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 1)); // Jan 1, 2025
  const [currentMonth, setCurrentMonth] = useState(1); // January
  const [currentYear, setCurrentYear] = useState(2025);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Static data for January 2025
  const sampleInstallmentData = {
    '2025-01-05': [
      {
        invoiceNumber: 'INV-001',
        date: '2025-01-05',
        amount: '₹1,500',
        status: 'Pending',
        vendorName: 'Tech Solutions Inc',
        totalAmount: '₹4,500'
      },
      {
        invoiceNumber: 'INV-002',
        date: '2025-01-05',
        amount: '₹2,300',
        status: 'Paid',
        vendorName: 'Office Supplies Co',
        totalAmount: '₹2,300'
      }
    ],
    '2025-01-12': [
      {
        invoiceNumber: 'INV-003',
        date: '2025-01-12',
        amount: '₹3,200',
        status: 'Pending',
        vendorName: 'Marketing Agency',
        totalAmount: '₹9,600'
      }
    ],
    '2025-01-15': [
      {
        invoiceNumber: 'INV-004',
        date: '2025-01-15',
        amount: '₹5,000',
        status: 'Overdue',
        vendorName: 'IT Services Ltd',
        totalAmount: '₹15,000'
      },
      {
        invoiceNumber: 'INV-005',
        date: '2025-01-15',
        amount: '₹1,800',
        status: 'Pending',
        vendorName: 'Consulting Group',
        totalAmount: '₹5,400'
      }
    ],
    '2025-01-20': [
      {
        invoiceNumber: 'INV-006',
        date: '2025-01-20',
        amount: '₹2,750',
        status: 'Paid',
        vendorName: 'Design Studio',
        totalAmount: '₹2,750'
      }
    ],
    '2025-01-31': [
      {
        invoiceNumber: 'INV-007',
        date: '2025-01-31',
        amount: '₹4,200',
        status: 'Pending',
        vendorName: 'Equipment Supplier',
        totalAmount: '₹12,600'
      },
      {
        invoiceNumber: 'INV-008',
        date: '2025-01-31',
        amount: '₹3,100',
        status: 'Overdue',
        vendorName: 'Maintenance Services',
        totalAmount: '₹9,300'
      }
    ]
  };

  const [installments, setInstallments] = useState([]);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    // Format date to YYYY-MM-DD without timezone conversion
    const dateKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    setInstallments(sampleInstallmentData[dateKey] || []);
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

  // Simple pagination calculation
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
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Installments; 