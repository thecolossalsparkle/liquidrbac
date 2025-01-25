import React, { useState } from 'react';
import Card from '../components/common/Card';
import LogsFilter from '../components/audit/LogsFilter';
import LogsTable from '../components/audit/LogsTable';

const AuditLogs = () => {
  // State for filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAction, setSelectedAction] = useState('All Actions');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  // Sample data for the logs
  const [logs, setLogs] = useState([]);

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

  const styles = {
    container: {
      padding: '12px',
      maxWidth: '98%',
      margin: '0 auto',
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
    },
  };

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
        />

        <LogsTable logs={logs} />
      </div>
    </Card>
  );
};

export default AuditLogs; 