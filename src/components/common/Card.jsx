import React from 'react';

const Card = ({ 
  children, 
  className = '',
  padding = true,
  shadow = true,
  ...props 
}) => {
  return (
    <div 
      className={`
        bg-white 
        rounded-lg 
        ${padding ? 'p-4' : ''} 
        ${shadow ? 'shadow-md' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card; 