import React from 'react';
import Navbar from '../common/Navbar';

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {children}
      </main>
    </div>
  );
};

export default PageLayout; 