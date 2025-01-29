import React from 'react';

const InstallmentCard = ({ installment }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-3">
      <div className="space-y-2.5">
        {/* ID Row */}
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">Installment #</span>
          <span className="text-black text-sm font-medium">{installment.id}</span>
        </div>

        {/* Vendor Name Row */}
        <div className="flex justify-between items-start">
          <span className="text-gray-500 text-sm">Vendor<br />Name</span>
          <span className="text-black text-sm font-medium text-right">{installment.vendorName}</span>
        </div>

        {/* Amount Row */}
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">Amount</span>
          <span className="text-black text-sm font-medium">{installment.amount}</span>
        </div>

        {/* Due Date Row */}
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">Due Date</span>
          <span className="text-black text-sm font-medium">{installment.dueDate}</span>
        </div>
      </div>
    </div>
  );
};

export default InstallmentCard; 