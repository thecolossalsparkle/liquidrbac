import React from 'react';

const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    const colors = {
      paid: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      overdue: 'bg-red-100 text-red-800'
    };
    return colors[status.toLowerCase()] || 'bg-gray-100 text-gray-800';
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge; 