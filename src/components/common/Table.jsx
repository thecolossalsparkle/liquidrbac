import React from 'react';

const Table = ({ columns, data = [], emptyMessage = 'No data available', renderCell }) => {
  if (!Array.isArray(data)) {
    return <div className="text-center py-4">{emptyMessage}</div>;
  }

  if (data.length === 0) {
    return <div className="text-center py-4">{emptyMessage}</div>;
  }

  // Mobile card view
  const MobileView = () => (
    <div className="space-y-4 sm:hidden">
      {data.map((item, index) => (
        <div key={item.id || index} className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 space-y-3">
            {columns.map((column) => {
              if (column.accessor === 'actions') {
                return (
                  <div key={column.accessor} className="flex justify-end border-t pt-3">
                    {renderCell(column, item)}
                  </div>
                );
              }
              return (
                <div key={column.accessor} className="flex justify-between items-center gap-4">
                  <span className="text-sm font-medium text-gray-500">
                    {column.header}
                  </span>
                  <span className="text-sm text-gray-900">
                    {renderCell ? renderCell(column, item) : item[column.accessor]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );

  // Desktop table view
  const DesktopView = () => (
    <div className="hidden sm:block">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={item.id || index}>
              {columns.map((column) => (
                <td key={column.accessor} className="px-6 py-4 whitespace-nowrap">
                  {renderCell ? renderCell(column, item) : item[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <MobileView />
      <DesktopView />
    </>
  );
};

export default Table; 