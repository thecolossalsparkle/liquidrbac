import React from 'react';

const InstallmentsTable = ({ installments }) => {
  const headers = [
    'Installment ID',
    'Vendor Name',
    'Invoice Number',
    'Selected Date',
    'Due Date',
    'Amount'
  ];

  return (
    <div className="overflow-x-auto">
      {/* Desktop Table */}
      <div className="hidden sm:block">
        <table className="min-w-full">
          <thead>
            <tr className="bg-blue-500">
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-white"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {installments.length === 0 ? (
              <tr>
                <td
                  colSpan={headers.length}
                  className="px-4 sm:px-6 py-4 text-center text-sm text-gray-500"
                >
                  No pending installments found
                </td>
              </tr>
            ) : (
              installments.map((installment) => (
                <tr
                  key={installment.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm">{installment.id}</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm">{installment.vendorName}</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm">{installment.invoiceNumber}</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm">{installment.selectedDate}</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm">{installment.dueDate}</td>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm">{installment.amount}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden">
        {installments.length === 0 ? (
          <div className="p-4 text-center text-sm text-gray-500">
            No pending installments found
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {installments.map((installment) => (
              <div key={installment.id} className="p-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-gray-500">ID:</span>
                  <span className="text-xs">{installment.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-gray-500">Vendor:</span>
                  <span className="text-xs">{installment.vendorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-gray-500">Invoice:</span>
                  <span className="text-xs">{installment.invoiceNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-gray-500">Selected Date:</span>
                  <span className="text-xs">{installment.selectedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-gray-500">Due Date:</span>
                  <span className="text-xs">{installment.dueDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs font-medium text-gray-500">Amount:</span>
                  <span className="text-xs">{installment.amount}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallmentsTable; 