import React, { useState } from 'react';

function BulkUploadModal({ isOpen, onClose, onUpload }) {
  const [selectedRole, setSelectedRole] = useState('');
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type === 'text/csv') {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile?.type === 'text/csv') {
      setFile(selectedFile);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-xl">
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">Bulk Upload Users</h2>
          
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm sm:text-base text-gray-700 mb-2">Select Role for New Users</label>
            <select
              className="w-full border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
            >
              <option value="">Choose a role</option>
              <option value="Accountant">Accountant</option>
              <option value="Manager">Manager</option>
              <option value="Auditor">Auditor</option>
              <option value="Operator">Operator</option>
              <option value="Not Assigned">Not Assigned</option>
            </select>
          </div>

          <div
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-8 text-center"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-gray-600">Drag and drop your CSV file here or click to browse</p>
              <p className="text-xs sm:text-sm text-gray-400">Supported format: CSV</p>
              <input
                type="file"
                accept=".csv"
                className="hidden"
                onChange={handleFileSelect}
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-block px-4 py-2 text-sm sm:text-base text-blue-500 hover:text-blue-600 cursor-pointer"
              >
                Browse Files
              </label>
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
              onClick={() => {
                onUpload({ file, selectedRole });
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
              disabled={!file || !selectedRole}
            >
              Upload Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BulkUploadModal; 