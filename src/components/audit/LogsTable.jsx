import React from 'react';

const LogsTable = ({ logs }) => {
  const styles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
    th: {
      padding: '15px',
      textAlign: 'left',
      borderBottom: '1px solid #e0e0e0',
      color: '#666',
      fontWeight: '600',
      backgroundColor: '#f8f9fa',
    },
    td: {
      padding: '15px',
      borderBottom: '1px solid #e0e0e0',
      color: '#333',
    },
  };

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Timestamp</th>
          <th style={styles.th}>User</th>
          <th style={styles.th}>Action</th>
          <th style={styles.th}>Details</th>
          <th style={styles.th}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, index) => (
          <tr key={index}>
            <td style={styles.td}>{log.timestamp}</td>
            <td style={styles.td}>{log.user}</td>
            <td style={styles.td}>{log.action}</td>
            <td style={styles.td}>{log.details}</td>
            <td style={styles.td}>{log.actions}</td>
          </tr>
        ))}
        {logs.length === 0 && (
          <tr>
            <td colSpan="5" style={{ ...styles.td, textAlign: 'center' }}>
              No logs found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default LogsTable; 