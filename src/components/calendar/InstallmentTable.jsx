import React from 'react';

const InstallmentTable = ({ installments }) => {
  return (
    <div className="overflow-x-auto">
      {/* Desktop Table */}
      <div className="hidden sm:block">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="p-3 text-left">Invoice Number</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Vendor Name</th>
              <th className="p-3 text-left">Invoice Total</th>
            </tr>
          </thead>
          <tbody>
            {installments && installments.length > 0 ? (
              installments.map((installment, index) => (
                <tr 
                  key={index}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="p-3">{installment.invoiceNumber}</td>
                  <td className="p-3">{installment.date}</td>
                  <td className="p-3">{installment.amount}</td>
                  <td className="p-3">{installment.status}</td>
                  <td className="p-3">{installment.vendorName}</td>
                  <td className="p-3">{installment.totalAmount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td 
                  colSpan="6" 
                  className="p-4 text-center text-gray-500 bg-blue-50"
                >
                  No Installment Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden">
        {installments && installments.length > 0 ? (
          <div className="space-y-4">
            {installments.map((installment, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm border space-y-2"
              >
                <div className="flex justify-between">
                  <span className="font-medium">Invoice Number:</span>
                  <span>{installment.invoiceNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Date:</span>
                  <span>{installment.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Amount:</span>
                  <span>{installment.amount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Status:</span>
                  <span>{installment.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Vendor:</span>
                  <span>{installment.vendorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Total:</span>
                  <span>{installment.totalAmount}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center p-4 bg-blue-50 text-gray-500 rounded-lg">
            No Installment Data Available
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallmentTable; 