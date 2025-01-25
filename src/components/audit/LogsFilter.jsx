import React, { useState } from 'react';
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
  isMobile
}) => {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);

  const styles = {
    filterSection: {
      display: 'flex',
      gap: '15px',
      marginBottom: '30px',
      alignItems: 'center',
      flexWrap: isMobile ? 'wrap' : 'nowrap',
      flexDirection: isMobile ? 'column' : 'row',
      width: '100%',
    },
    searchWrapper: {
      flex: '1',
      minWidth: isMobile ? '100%' : '200px',
      width: isMobile ? '100%' : 'auto',
    },
    select: {
      padding: '10px 15px',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      backgroundColor: 'white',
      fontSize: '14px',
      width: isMobile ? '100%' : '130px',
    },
    dateInput: {
      padding: '10px 15px',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      fontSize: '14px',
      width: isMobile ? '100%' : '130px',
    },
    dateGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      width: isMobile ? '100%' : 'auto',
      flexDirection: isMobile ? 'column' : 'row',
    },
    mobileFilterToggle: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#f5f5f5',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    mobileFilters: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    clearButton: {
      width: isMobile ? '100%' : 'auto',
    },
    dateSeparator: {
      textAlign: 'center',
      width: isMobile ? '100%' : 'auto',
    }
  };

  if (isMobile) {
    return (
      <div style={styles.filterSection}>
        <div style={styles.searchWrapper}>
          <SearchInput
            placeholder="Search logs..."
            value={searchQuery}
            onChange={onSearch}
          />
        </div>
        
        <button 
          style={styles.mobileFilterToggle}
          onClick={() => setIsFilterExpanded(!isFilterExpanded)}
        >
          <span>Filters</span>
          <span>{isFilterExpanded ? '▼' : '▶'}</span>
        </button>

        {isFilterExpanded && (
          <div style={styles.mobileFilters}>
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
                placeholder="Start Date"
              />
              <div style={styles.dateSeparator}>to</div>
              <input
                type="date"
                value={endDate}
                onChange={onEndDateChange}
                style={styles.dateInput}
                placeholder="End Date"
              />
            </div>

            <Button 
              onClick={onClearFilters} 
              variant="secondary"
              style={styles.clearButton}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    );
  }

  // Desktop view remains unchanged
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