import React from 'react';
import { Box, Grid } from '@mui/material';
import DashboardKPIs from '../../components/KPIs/DashboardKPIs';
import VendorPaymentsChart from '../../components/Charts/VendorPaymentsChart';
import ExpenseBreakdownChart from '../../components/Charts/ExpenseBreakdownChart';
import PaymentTimelineChart from '../../components/Charts/PaymentTimelineChart';

const ExpenditureAnalysis = ({ 
  kpiData, 
  vendorPaymentsData, 
  expenseBreakdownData, 
  timelineData,
  currentTab,
  onTabChange 
}) => {
  return (
    <Box>
      <DashboardKPIs 
        data={kpiData} 
        currentTab={currentTab}
        onTabChange={onTabChange}
      />
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <VendorPaymentsChart data={vendorPaymentsData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ExpenseBreakdownChart data={expenseBreakdownData} />
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <PaymentTimelineChart data={timelineData} />
      </Box>
    </Box>
  );
};

export default ExpenditureAnalysis; 