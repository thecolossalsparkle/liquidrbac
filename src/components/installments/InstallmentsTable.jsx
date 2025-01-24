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
      <table className="min-w-full">
        <thead>
          <tr className="bg-blue-500">
            {headers.map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-sm font-medium text-white"
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
                className="px-6 py-4 text-center text-gray-500"
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
                <td className="px-6 py-4">{installment.id}</td>
                <td className="px-6 py-4">{installment.vendorName}</td>
                <td className="px-6 py-4">{installment.invoiceNumber}</td>
                <td className="px-6 py-4">{installment.selectedDate}</td>
                <td className="px-6 py-4">{installment.dueDate}</td>
                <td className="px-6 py-4">{installment.amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InstallmentsTable; 