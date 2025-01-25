import React from 'react';

const LogsTable = ({ logs, onFlagToggle, isMobile }) => {
  const styles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: isMobile ? '12px' : '20px',
    },
    th: {
      backgroundColor: '#f5f5f5',
      padding: isMobile ? '6px 4px' : '12px 8px',
      textAlign: 'left',
      fontSize: isMobile ? '11px' : '14px',
      whiteSpace: isMobile ? 'nowrap' : 'normal',
    },
    td: {
      padding: isMobile ? '6px 4px' : '12px 8px',
      borderBottom: '1px solid #eee',
      fontSize: isMobile ? '11px' : '14px',
      wordBreak: 'break-word',
    },
    mobileCard: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '8px',
      marginBottom: '12px',
      border: '1px solid #eee',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    },
    mobileCell: {
      display: 'flex',
      flexDirection: 'column',
      padding: '4px 0',
    },
    mobileLabel: {
      fontWeight: '600',
      fontSize: '10px',
      color: '#666',
      marginBottom: '2px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    mobileValue: {
      fontSize: '12px',
      color: '#333',
      lineHeight: '1.4',
    },
    flagButton: {
      padding: isMobile ? '4px 8px' : '6px 12px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      fontSize: isMobile ? '10px' : '13px',
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      minWidth: isMobile ? '60px' : '80px',
      justifyContent: 'center',
    },
    flaggedButton: {
      backgroundColor: '#ffebee',
      color: '#d32f2f',
    },
    unflaggedButton: {
      backgroundColor: '#f5f5f5',
      color: '#666',
    },
    mobileActions: {
      marginTop: '8px',
      display: 'flex',
      justifyContent: 'flex-end',
      borderTop: '1px solid #eee',
      paddingTop: '8px',
    },
    timestamp: {
      color: '#666',
      fontSize: isMobile ? '10px' : '12px',
      marginBottom: isMobile ? '4px' : '0',
    },
    noLogs: {
      textAlign: 'center',
      padding: '20px',
      color: '#666',
      fontSize: isMobile ? '12px' : '14px',
    }
  };

  const FlagButton = ({ flagged, onClick }) => (
    <button
      onClick={onClick}
      style={{
        ...styles.flagButton,
        ...(flagged ? styles.flaggedButton : styles.unflaggedButton),
      }}
    >
      {flagged ? '🚩 Flagged' : '⚐ Flag'}
    </button>
  );

  if (isMobile) {
    return (
      <div>
        {logs.length === 0 ? (
          <div style={styles.noLogs}>No logs found</div>
        ) : (
          logs.map((log) => (
            <div key={log.id} style={styles.mobileCard}>
              <div style={styles.timestamp}>{log.timestamp}</div>
              <div style={styles.mobileCell}>
                <span style={styles.mobileLabel}>User</span>
                <span style={styles.mobileValue}>{log.user}</span>
              </div>
              <div style={styles.mobileCell}>
                <span style={styles.mobileLabel}>Action</span>
                <span style={styles.mobileValue}>{log.action}</span>
              </div>
              <div style={styles.mobileCell}>
                <span style={styles.mobileLabel}>Details</span>
                <span style={styles.mobileValue}>{log.details}</span>
              </div>
              <div style={styles.mobileActions}>
                <FlagButton 
                  flagged={log.flagged} 
                  onClick={() => onFlagToggle(log.id)} 
                />
              </div>
            </div>
          ))
        )}
      </div>
    );
  }

  // Desktop view remains the same but with responsive padding/fonts
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
        {logs.length === 0 ? (
          <tr>
            <td colSpan="5" style={styles.noLogs}>No logs found</td>
          </tr>
        ) : (
          logs.map((log) => (
            <tr key={log.id}>
              <td style={styles.td}>{log.timestamp}</td>
              <td style={styles.td}>{log.user}</td>
              <td style={styles.td}>{log.action}</td>
              <td style={styles.td}>{log.details}</td>
              <td style={styles.td}>
                <FlagButton 
                  flagged={log.flagged} 
                  onClick={() => onFlagToggle(log.id)} 
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default LogsTable; 