import React, { useState, useMemo } from 'react';
import SearchInput from '../components/common/SearchInput';
import Table from '../components/common/Table';
import Button from '../components/common/Button';
import StatusBadge from '../components/invoices/StatusBadge';
import InvoiceModal from '../components/invoices/InvoiceModal';
import CreateInvoiceModal from '../components/invoices/CreateInvoiceModal';
import BulkUploadModal from '../components/invoices/BulkUploadModal';
import TablePagination from '../components/common/TablePagination';
import { 
  PlusIcon, CheckCircleIcon, CalendarIcon, ChevronDownIcon, EyeIcon, PencilIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const Invoices = () => {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [modalMode, setModalMode] = useState(null); // 'view' or 'edit'
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showBulkUploadModal, setShowBulkUploadModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedTimeRange, setSelectedTimeRange] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [customDateRange, setCustomDateRange] = useState({
    startDate: '',
    endDate: ''
  });
  
  // Mock data for initial render
  const [invoices] = useState([
    // Previous Month
    {
      id: 'INV-001',
      customer: 'John Doe',
      amount: '₹1,200.00',
      status: 'paid',
      dueDate: '2025-01-15', // Previous month
      vendor: {
        name: 'XYZ Sdn',
        email: 'xyz@gmail',
        phone: '1234567',
        address: '#3, Brigade M'
      },
      subtotal: '1,000.00',
      tax: '200.00',
      discount: '0.00',
      total: '1,200.00'
    },
    {
      id: 'INV-002',
      customer: 'Jane Smith',
      amount: '₹850.00',
      status: 'pending',
      dueDate: '2025-01-28', // Previous month
      vendor: {
        name: 'ABC Corp',
        email: 'abc@gmail',
        phone: '9876543',
        address: '#45, Tech Park'
      },
      subtotal: '800.00',
      tax: '50.00',
      discount: '0.00',
      total: '850.00'
    },
    // Current Month
    {
      id: 'INV-003',
      customer: 'Bob Johnson',
      amount: '₹2,300.00',
      status: 'overdue',
      dueDate: '2024-12-10', // Current month
      vendor: {
        name: 'PQR Ltd',
        email: 'pqr@gmail',
        phone: '4567890',
        address: '#12, Business Hub'
      },
      subtotal: '2,000.00',
      tax: '300.00',
      discount: '0.00',
      total: '2,300.00'
    },
    {
      id: 'INV-004',
      customer: 'Sarah Wilson',
      amount: '₹1,750.00',
      status: 'pending',
      dueDate: '2024-12-25', // Current month
      vendor: {
        name: 'DEF Industries',
        email: 'def@gmail',
        phone: '5557777',
        address: '#78, Tech Valley'
      },
      subtotal: '1,500.00',
      tax: '250.00',
      discount: '0.00',
      total: '1,750.00'
    },
    // Next Month
    {
      id: 'INV-005',
      customer: 'Mike Brown',
      amount: '₹3,100.00',
      status: 'pending',
      dueDate: '2025-01-05', // Next month
      vendor: {
        name: 'GHI Solutions',
        email: 'ghi@gmail',
        phone: '8889999',
        address: '#90, Innovation Park'
      },
      subtotal: '2,800.00',
      tax: '300.00',
      discount: '0.00',
      total: '3,100.00'
    },
    {
      id: 'INV-006',
      customer: 'Emily Davis',
      amount: '₹1,900.00',
      status: 'paid',
      dueDate: '2025-04-15', // Next month
      vendor: {
        name: 'JKL Systems',
        email: 'jkl@gmail',
        phone: '7773333',
        address: '#34, Business Square'
      },
      subtotal: '1,700.00',
      tax: '200.00',
      discount: '0.00',
      total: '1,900.00'
    }
  ]);

  const filteredInvoices = useMemo(() => {
    let filtered = invoices;

    // Apply status filter
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(invoice => 
        invoice.status.toLowerCase() === selectedStatus.toLowerCase()
      );
    }

    // Apply time range filter
    if (selectedTimeRange !== 'all') {
      const today = new Date();
      const currentYear = today.getFullYear();
      const currentMonth = today.getMonth();
      
      // Set up date ranges
      const startOfThisMonth = new Date(currentYear, currentMonth, 1);
      const endOfThisMonth = new Date(currentYear, currentMonth + 1, 0);
      const startOfLastMonth = new Date(currentYear, currentMonth - 1, 1);
      const endOfLastMonth = new Date(currentYear, currentMonth, 0);

      filtered = filtered.filter(invoice => {
        const invoiceDate = new Date(invoice.dueDate);
        
        switch (selectedTimeRange) {
          case 'this_month':
            return invoiceDate >= startOfThisMonth && invoiceDate <= endOfThisMonth;
          case 'last_month':
            return invoiceDate >= startOfLastMonth && invoiceDate <= endOfLastMonth;
          case 'custom':
            if (customDateRange.startDate && customDateRange.endDate) {
              const start = new Date(customDateRange.startDate);
              const end = new Date(customDateRange.endDate);
              return invoiceDate >= start && invoiceDate <= end;
            }
            return true;
          default:
            return true;
        }
      });
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const searchTerm = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(invoice => 
        invoice.id.toLowerCase().includes(searchTerm) ||
        invoice.customer.toLowerCase().includes(searchTerm) ||
        invoice.vendor.name.toLowerCase().includes(searchTerm) ||
        invoice.amount.toLowerCase().includes(searchTerm) ||
        invoice.status.toLowerCase().includes(searchTerm)
      );
    }

    return filtered;
  }, [searchQuery, invoices, selectedStatus, selectedTimeRange, customDateRange]);

  const totalPages = entriesPerPage === 'all' ? 1 : Math.ceil(filteredInvoices.length / entriesPerPage);
  const paginatedInvoices = entriesPerPage === 'all' 
    ? filteredInvoices 
    : filteredInvoices.slice((currentPage - 1) * entriesPerPage, currentPage * entriesPerPage);

  const handleView = (invoice) => {
    setSelectedInvoice(invoice);
    setModalMode('view');
  };

  const handleEdit = (invoice) => {
    setSelectedInvoice(invoice);
    setModalMode('edit');
  };

  const handleCloseModal = () => {
    setSelectedInvoice(null);
    setModalMode(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Invoice Management</h1>
          <p className="text-gray-500">Manage and track your invoices</p>
        </div>
        <div className="flex flex-wrap gap-3 w-full sm:w-auto">
          <Button 
            variant="secondary" 
            className="flex items-center gap-2 flex-1 sm:flex-initial justify-center"
            onClick={() => setShowCreateModal(true)}
          >
            <PlusIcon className="w-5 h-5" />
            Create Invoice
          </Button>
          <Button 
            variant="secondary"
            onClick={() => setShowBulkUploadModal(true)}
            className="flex-1 sm:flex-initial justify-center"
          >
            Bulk Upload
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm">
        <div className="mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className={`w-full ${selectedTimeRange === 'custom' ? 'lg:w-2/5' : 'lg:w-3/5'}`}>
              <SearchInput 
                placeholder="Search invoices..." 
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                value={searchQuery}
              />
            </div>
            <div className={`flex flex-col sm:flex-row gap-4 w-full ${selectedTimeRange === 'custom' ? 'lg:w-3/5' : 'lg:w-2/5'}`}>
              <div className="relative w-full sm:flex-1 lg:max-w-[180px]">
                <div className="relative">
                  <select 
                    className={`appearance-none w-full px-4 py-2 pl-10 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      selectedStatus !== 'all' ? 'bg-blue-50' : 'bg-white'
                    }`}
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="overdue">Overdue</option>
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CheckCircleIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="relative w-full sm:flex-1 lg:max-w-[180px]">
                <div className="relative">
                  <select 
                    className={`appearance-none w-full px-4 py-2 pl-10 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                      selectedTimeRange !== 'all' ? 'bg-blue-50' : 'bg-white'
                    }`}
                    value={selectedTimeRange}
                    onChange={(e) => setSelectedTimeRange(e.target.value)}
                  >
                    <option value="all">All Time</option>
                    <option value="this_month">This Month</option>
                    <option value="last_month">Last Month</option>
                    <option value="custom">Custom Range</option>
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <CalendarIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {selectedTimeRange === 'custom' && (
                <div className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                  <input
                    type="date"
                    className="w-full sm:w-40 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={customDateRange.startDate}
                    onChange={(e) => setCustomDateRange(prev => ({ ...prev, startDate: e.target.value }))}
                  />
                  <input
                    type="date"
                    className="w-full sm:w-40 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={customDateRange.endDate}
                    onChange={(e) => setCustomDateRange(prev => ({ ...prev, endDate: e.target.value }))}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto -mx-4 sm:mx-0">
          <Table
            columns={[
              { header: 'Invoice #', accessor: 'id' },
              { header: 'Vendor Name', accessor: 'vendor.name' },
              { header: 'Amount', accessor: 'amount' },
              { header: 'Status', accessor: 'status' },
              { header: 'Due Date', accessor: 'dueDate' },
              { header: 'Actions', accessor: 'actions' }
            ]}
            data={paginatedInvoices}
            emptyMessage="No Invoices Found"
            renderCell={(column, item) => {
              if (column.accessor === 'status') {
                return <StatusBadge status={item.status} />;
              }
              if (column.accessor === 'actions') {
                return (
                  <div className="flex gap-2 justify-end">
                    <button 
                      className="text-blue-600 hover:text-blue-800 p-2"
                      onClick={() => handleView(item)}
                    >
                      <EyeIcon className="w-5 h-5" />
                    </button>
                    <button 
                      className="text-gray-600 hover:text-gray-800 p-2"
                      onClick={() => handleEdit(item)}
                    >
                      <PencilIcon className="w-5 h-5" />
                    </button>
                  </div>
                );
              }
              if (column.accessor === 'vendor.name') {
                return item.vendor?.name;
              }
              return item[column.accessor];
            }}
          />
        </div>

        <TablePagination
          totalEntries={filteredInvoices.length}
          entriesPerPage={entriesPerPage === 'all' ? filteredInvoices.length : entriesPerPage}
          currentPage={currentPage}
          onEntriesPerPageChange={(value) => {
            setEntriesPerPage(value === filteredInvoices.length ? 'all' : value);
            setCurrentPage(1);
          }}
          onPageChange={setCurrentPage}
        />
      </div>

      <InvoiceModal
        isOpen={!!selectedInvoice}
        onClose={handleCloseModal}
        invoice={selectedInvoice}
        mode={modalMode}
      />

      <CreateInvoiceModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
      />

      <BulkUploadModal
        isOpen={showBulkUploadModal}
        onClose={() => setShowBulkUploadModal(false)}
      />
    </div>
  );
};

export default Invoices;