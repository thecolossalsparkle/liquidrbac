import React, { useState, useEffect } from 'react';
import Card from '../components/common/Card';
import LogsFilter from '../components/audit/LogsFilter';
import LogsTable from '../components/audit/LogsTable';
import TablePagination from '../components/common/TablePagination';

const AuditLogs = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Add window resize listener
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  // State for filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAction, setSelectedAction] = useState('All Actions');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample dummy data for the logs
  const [logs, setLogs] = useState([
    {
      id: 1,
      timestamp: '2024-03-20 10:30:45',
      user: 'John Doe',
      action: 'User Login',
      details: 'Successfully logged in from IP 192.168.1.1',
      flagged: false
    },
    {
      id: 2,
      timestamp: '2024-03-20 11:15:22',
      user: 'Jane Smith',
      action: 'Create Invoice',
      details: 'Created invoice #INV-2024-001',
      flagged: true
    },
    {
      id: 3,
      timestamp: '2024-03-20 12:00:00',
      user: 'Admin User',
      action: 'Update Settings',
      details: 'Modified system configuration parameters',
      flagged: false
    },
    {
      id: 4,
      timestamp: '2024-03-20 13:45:30',
      user: 'Sarah Wilson',
      action: 'Delete Record',
      details: 'Removed customer record #CR-123',
      flagged: false
    }
  ]);

  // Filter handling functions
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleActionChange = (e) => {
    setSelectedAction(e.target.value);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedAction('All Actions');
    setStartDate('');
    setEndDate('');
  };

  // Add flag toggle handler
  const handleFlagToggle = (logId) => {
    setLogs(logs.map(log => 
      log.id === logId ? { ...log, flagged: !log.flagged } : log
    ));
  };

  // Filter logs based on search and filters
  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.details.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAction = selectedAction === 'All Actions' || log.action === selectedAction;
    return matchesSearch && matchesAction;
  });

  // Calculate pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredLogs.slice(indexOfFirstEntry, indexOfLastEntry);

  const styles = {
    container: {
      padding: isMobile ? '8px' : '12px',
      maxWidth: '100%',
      margin: '0 auto',
      overflowX: 'hidden',
    },
    header: {
      fontSize: isMobile ? '20px' : '24px',
      fontWeight: 'bold',
      marginBottom: isMobile ? '12px' : '20px',
      color: '#333',
      padding: isMobile ? '0 4px' : '0',
    },
    mobileCard: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '12px',
      marginBottom: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      border: '1px solid #eee',
    },
    mobileCardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '8px',
    },
    mobileCardTitle: {
      fontWeight: 'bold',
      color: '#333',
    },
    mobileCardTimestamp: {
      color: '#666',
      fontSize: '0.9em',
    },
    mobileCardDetails: {
      color: '#444',
      marginTop: '8px',
    },
    flagButton: {
      padding: '4px 8px',
      backgroundColor: 'transparent',
      border: '1px solid #ddd',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '8px',
    },
  };

  const MobileLogCard = ({ log }) => (
    <div style={styles.mobileCard}>
      <div style={styles.mobileCardHeader}>
        <span style={styles.mobileCardTitle}>{log.user}</span>
        <span style={styles.mobileCardTimestamp}>{log.timestamp}</span>
      </div>
      <div>
        <strong>{log.action}</strong>
      </div>
      <div style={styles.mobileCardDetails}>
        {log.details}
      </div>
      <button 
        style={{
          ...styles.flagButton,
          backgroundColor: log.flagged ? '#fff3cd' : 'transparent',
        }}
        onClick={() => handleFlagToggle(log.id)}
      >
        {log.flagged ? '🚩 Flagged' : '⚐ Flag'}
      </button>
    </div>
  );

  return (
    <Card>
      <div style={styles.container}>
        <h1 style={styles.header}>Audit Logs</h1>
        
        <LogsFilter
          searchQuery={searchQuery}
          selectedAction={selectedAction}
          startDate={startDate}
          endDate={endDate}
          onSearch={handleSearch}
          onActionChange={handleActionChange}
          onStartDateChange={(e) => setStartDate(e.target.value)}
          onEndDateChange={(e) => setEndDate(e.target.value)}
          onClearFilters={handleClearFilters}
          isMobile={isMobile}
        />

        {isMobile ? (
          <div>
            {currentEntries.map(log => (
              <MobileLogCard key={log.id} log={log} />
            ))}
          </div>
        ) : (
          <LogsTable 
            logs={currentEntries} 
            onFlagToggle={handleFlagToggle}
            isMobile={isMobile} 
          />
        )}

        <TablePagination
          totalEntries={filteredLogs.length}
          entriesPerPage={entriesPerPage}
          currentPage={currentPage}
          onEntriesPerPageChange={(value) => {
            setEntriesPerPage(value);
            setCurrentPage(1);
          }}
          onPageChange={setCurrentPage}
        />
      </div>
    </Card>
  );
};

export default AuditLogs; 