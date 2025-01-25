import React from 'react';
import SearchInput from '../common/SearchInput';
import Button from '../common/Button';

const LogsFilter = ({
  searchQuery,
  selectedAction,
  startDate,
  endDate,
  onSearch,
  onActionChange,
  onStartDateChange,
  onEndDateChange,
  onClearFilters,
}) => {
  const styles = {
    filterSection: {
      display: 'flex',
      gap: '15px',
      marginBottom: '30px',
      alignItems: 'center',
      flexWrap: 'nowrap',
    },
    searchWrapper: {
      flex: '1',
      minWidth: '200px',
    },
    select: {
      padding: '10px 15px',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      backgroundColor: 'white',
      fontSize: '14px',
      width: '130px',
    },
    dateInput: {
      padding: '10px 15px',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      fontSize: '14px',
      width: '130px',
    },
    dateGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    }
  };

  return (
    <div style={styles.filterSection}>
      <div style={styles.searchWrapper}>
        <SearchInput
          placeholder="Search logs by user, action, or details..."
          value={searchQuery}
          onChange={onSearch}
        />
      </div>
      
      <select
        value={selectedAction}
        onChange={onActionChange}
        style={styles.select}
      >
        <option>All Actions</option>
        <option>Login</option>
        <option>Logout</option>
        <option>Create</option>
        <option>Update</option>
        <option>Delete</option>
      </select>

      <div style={styles.dateGroup}>
        <input
          type="date"
          value={startDate}
          onChange={onStartDateChange}
          style={styles.dateInput}
        />
        
        <span>to</span>
        
        <input
          type="date"
          value={endDate}
          onChange={onEndDateChange}
          style={styles.dateInput}
        />
      </div>

      <Button onClick={onClearFilters} variant="secondary">
        Clear Filters
      </Button>
    </div>
  );
};

export default LogsFilter; 