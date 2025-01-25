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
  
  // Mock data for initial render
  const [invoices] = useState([
    {
      id: 'INV-001',
      customer: 'John Doe',
      amount: '₹1,200.00',
      status: 'paid',
      dueDate: '2024-03-15',
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
      dueDate: '2024-03-14',
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
    {
      id: 'INV-003',
      customer: 'Bob Johnson',
      amount: '₹2,300.00',
      status: 'overdue',
      dueDate: '2024-03-10',
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
    }
  ]);

  const filteredInvoices = useMemo(() => {
    if (!searchQuery.trim()) return invoices;
    
    const searchTerm = searchQuery.toLowerCase().trim();
    return invoices.filter(invoice => 
      invoice.id.toLowerCase().includes(searchTerm) ||
      invoice.customer.toLowerCase().includes(searchTerm) ||
      invoice.vendor.name.toLowerCase().includes(searchTerm) ||
      invoice.amount.toLowerCase().includes(searchTerm) ||
      invoice.status.toLowerCase().includes(searchTerm)
    );
  }, [searchQuery, invoices]);

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
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="w-full sm:flex-1">
              <SearchInput 
                placeholder="Search invoices..." 
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page when searching
                }}
                value={searchQuery}
              />
            </div>
            <div className="relative w-full sm:w-48">
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
            <div className="relative w-full sm:w-48">
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