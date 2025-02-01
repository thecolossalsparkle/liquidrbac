import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import FinancialSnapshot from '../../components/KPIs/FinancialSnapshot';
import VendorPaymentsChart from '../../components/Charts/VendorPaymentsChart';
import ExpenseBreakdownChart from '../../components/Charts/ExpenseBreakdownChart';

const Dashboard = () => {
  // Mock data - replace with actual data from your API
  const financialData = {
    totalPayments: '$150,000',
    outstandingPayables: '$45,000',
    taxLiability: '$25,000',
    upcomingPayments: '$30,000',
    latePayments: '5',
  };

  // Mock data for vendor payments chart
  const vendorPaymentsData = [
    { vendor: 'Acme Corp', amount: 45000 },
    { vendor: 'Tech Solutions', amount: 30000 },
    { vendor: 'Global Services', amount: 28000 },
    { vendor: 'Supply Co', amount: 22000 },
    { vendor: 'Marketing Agency', amount: 18000 },
  ];

  // Mock data for expense breakdown chart
  const expenseBreakdownData = [
    { name: 'Supplies', value: 35 },
    { name: 'Logistics', value: 25 },
    { name: 'Rent', value: 20 },
    { name: 'Utilities', value: 15 },
    { name: 'Others', value: 5 },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Financial Snapshot
          </Typography>
          <FinancialSnapshot data={financialData} />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Analytics
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <VendorPaymentsChart data={vendorPaymentsData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ExpenseBreakdownChart data={expenseBreakdownData} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
