import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import FinancialSnapshot from '../../components/KPIs/FinancialSnapshot';
import VendorPaymentsChart from '../../components/Charts/VendorPaymentsChart';
import ExpenseBreakdownChart from '../../components/Charts/ExpenseBreakdownChart';
import PayableAgingChart from '../../components/Charts/PayableAgingChart';
import VendorPaymentDistributionChart from '../../components/Charts/VendorPaymentDistributionChart';
import PaymentTimelineChart from '../../components/Charts/PaymentTimelineChart';

const Dashboard = () => {
  // Mock data - replace with actual data from your API
  const financialData = {
    totalPayments: '₹1,50,000',
    outstandingPayables: '₹45,000',
    taxLiability: '₹25,000',
    upcomingPayments: '₹30,000',
    latePayments: '5',
  };

  // Mock data for vendor payments chart
  const vendorPaymentsData = [
    { vendor: 'Acme Corp', amount: 450000 },
    { vendor: 'Tech Solutions', amount: 300000 },
    { vendor: 'Global Services', amount: 280000 },
    { vendor: 'Supply Co', amount: 220000 },
    { vendor: 'Marketing Agency', amount: 180000 },
  ];

  // Mock data for expense breakdown chart
  const expenseBreakdownData = [
    { name: 'Supplies', value: 35 },
    { name: 'Logistics', value: 25 },
    { name: 'Rent', value: 20 },
    { name: 'Utilities', value: 15 },
    { name: 'Others', value: 5 },
  ];

  // Add this mock data
  const payableAgingData = {
    recent: 7500000,    // 0-30 days
    medium: 4500000,    // 31-60 days
    overdue: 3000000    // 61+ days
  };

  const vendorPaymentDistributionData = [
    { vendor: 'Acme Corp', onTime: 3500000, overdue: 1000000 },
    { vendor: 'Tech Solutions', onTime: 2500000, overdue: 500000 },
    { vendor: 'Global Services', onTime: 2000000, overdue: 800000 },
    { vendor: 'Supply Co', onTime: 1800000, overdue: 400000 },
    { vendor: 'Marketing Agency', onTime: 1500000, overdue: 300000 }
  ];

  // Add mock data for timeline
  const timelineData = [
    {
      id: "Upcoming Payments",
      color: "hsl(141, 70%, 50%)",
      data: [
        { x: '2024-03-01', y: 150000 },
        { x: '2024-03-08', y: 180000 },
        { x: '2024-03-15', y: 120000 },
        { x: '2024-03-22', y: 200000 },
        { x: '2024-03-29', y: 160000 },
      ]
    },
    {
      id: "Overdue Payments",
      color: "hsl(0, 70%, 50%)",
      data: [
        { x: '2024-03-01', y: 30000 },
        { x: '2024-03-08', y: 45000 },
        { x: '2024-03-15', y: 25000 },
        { x: '2024-03-22', y: 35000 },
        { x: '2024-03-29', y: 20000 },
      ]
    }
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

        <Box sx={{ mt: 4, mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Payment Schedule (Timeline View)
          </Typography>
        </Box>
        
        <Box sx={{ width: '100%', mb: 4 }}>
          <PaymentTimelineChart data={timelineData} />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Accounts Payable Management
          </Typography>
        </Box>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <PayableAgingChart data={payableAgingData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <VendorPaymentDistributionChart data={vendorPaymentDistributionData} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
