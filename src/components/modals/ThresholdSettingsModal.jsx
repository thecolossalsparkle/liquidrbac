import React, { useState } from 'react';
import Card from '../common/Card';

function ThresholdSettingsModal({ isOpen, onClose, onSave }) {
  const [managerThreshold, setManagerThreshold] = useState('');
  const [operatorThreshold, setOperatorThreshold] = useState('');

  const handleSave = () => {
    onSave({ managerThreshold, operatorThreshold });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-xl">
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Invoice Threshold Settings</h2>
          
          <div className="bg-blue-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg text-gray-700 mb-2">Set the invoice amount thresholds:</h3>
            <ul className="text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2">
              <li>• Managers can manage invoices ABOVE their threshold amount</li>
              <li>• Operators can manage invoices BELOW their threshold amount</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-600 mt-2">Note: Manager threshold should be greater than Operator threshold</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm sm:text-base text-gray-700 mb-2">Manager Threshold Amount (₹)</label>
              <input
                type="number"
                className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter amount"
                value={managerThreshold}
                onChange={(e) => setManagerThreshold(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm sm:text-base text-gray-700 mb-2">Operator Threshold Amount (₹)</label>
              <input
                type="number"
                className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter amount"
                value={operatorThreshold}
                onChange={(e) => setOperatorThreshold(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="w-full sm:w-auto px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThresholdSettingsModal; 