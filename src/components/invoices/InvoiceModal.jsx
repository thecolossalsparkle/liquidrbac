import React from 'react';
import Button from '../common/Button';

const InvoiceModal = ({ isOpen, onClose, invoice, mode = 'view' }) => {
  if (!isOpen || !invoice) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Invoice Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {mode === 'view' ? (
          <div className="space-y-6">
            {/* Vendor Information Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Vendor Information</h3>
              <div className="space-y-2">
                <div className="flex">
                  <span className="font-medium w-24">Name:</span>
                  <span>{invoice.vendor?.name}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-24">Email:</span>
                  <span>{invoice.vendor?.email}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-24">Phone:</span>
                  <span>{invoice.vendor?.phone}</span>
                </div>
                <div className="flex">
                  <span className="font-medium w-24">Address:</span>
                  <span>{invoice.vendor?.address}</span>
                </div>
              </div>
            </div>

            {/* Invoice Breakdown Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Invoice Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{invoice.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>₹{invoice.tax}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span>₹{invoice.discount}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-200 font-semibold">
                  <span>TOTAL</span>
                  <span>₹{invoice.total}</span>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Comments</h3>
              <textarea
                placeholder="Add a comment..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              />
            </div>

            {/* Action Buttons - Updated for better mobile layout */}
            <div className="space-y-3">
              {/* Edit Profile and Override buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="secondary" 
                  className="w-full"
                >
                  Edit Profile
                </Button>
                <Button 
                  variant="secondary"
                  className="w-full"
                >
                  Override
                </Button>
              </div>

              {/* Reject and Approve buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="secondary" 
                  className="w-full bg-red-50 text-red-600 hover:bg-red-100"
                >
                  Reject
                </Button>
                <Button 
                  variant="primary" 
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  Approve
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Invoice Number</label>
              <input
                type="text"
                defaultValue={invoice.id}
                disabled
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Customer Name</label>
              <input
                type="text"
                defaultValue={invoice.customer}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Amount</label>
              <input
                type="text"
                defaultValue={invoice.amount.replace('₹', '')}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Status</label>
              <select
                defaultValue={invoice.status}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Due Date</label>
              <input
                type="date"
                defaultValue={invoice.dueDate}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </form>
        )}

        <div className="mt-6 flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          {mode === 'edit' && (
            <Button variant="primary" onClick={() => {/* Handle save */}}>
              Save Changes
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvoiceModal; 