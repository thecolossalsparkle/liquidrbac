import React from 'react';
import Card from './Card';

const StatCard = ({ 
  title, 
  value, 
  icon,
  variant = 'default'
}) => {
  const variants = {
    default: 'text-blue-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
    success: 'text-green-600'
  };

  return (
    <Card className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-600 text-sm">{title}</span>
        {icon && (
          <span className={`${variants[variant]}`}>
            {icon}
          </span>
        )}
      </div>
      <div className="text-3xl font-semibold">{value}</div>
    </Card>
  );
};

export default StatCard; 