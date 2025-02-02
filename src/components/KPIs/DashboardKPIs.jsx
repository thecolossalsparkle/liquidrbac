import React from 'react';
import { Grid, Box } from '@mui/material';
import FinancialSnapshot from './FinancialSnapshot';

const DashboardKPIs = ({ data }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <FinancialSnapshot data={data} />
    </Box>
  );
};

export default DashboardKPIs; 