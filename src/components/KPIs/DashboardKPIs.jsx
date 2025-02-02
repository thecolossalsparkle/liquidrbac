import React from 'react';
import { Box } from '@mui/material';
import FinancialSnapshot from './FinancialSnapshot';
import DashboardTabs from '../Navigation/DashboardTabs';

const DashboardKPIs = ({ data, currentTab, onTabChange }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <FinancialSnapshot data={data} />
      <Box sx={{ mt: 3 }}>
        <DashboardTabs currentTab={currentTab} onTabChange={onTabChange} />
      </Box>
    </Box>
  );
};

export default DashboardKPIs; 