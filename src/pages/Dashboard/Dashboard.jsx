import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import FinancialSnapshot from '../../components/KPIs/FinancialSnapshot';
import VendorPaymentsChart from '../../components/Charts/VendorPaymentsChart';
import ExpenseBreakdownChart from '../../components/Charts/ExpenseBreakdownChart';
import PayableAgingChart from '../../components/Charts/PayableAgingChart';
import VendorPaymentDistributionChart from '../../components/Charts/VendorPaymentDistributionChart';
import PaymentTimelineChart from '../../components/Charts/PaymentTimelineChart';
import TopVendorsTable from '../../components/Tables/TopVendorsTable';
import VendorComparisonChart from '../../components/Charts/VendorComparisonChart';
import BudgetAnalysisChart from '../../components/Charts/BudgetAnalysisChart';

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

  // Add mock data for top vendors
  const topVendorsData = [
    {
      name: 'Acme Corp',
      totalSpent: 4500000,
      paymentCount: 12,
      averagePayment: 375000
    },
    {
      name: 'Tech Solutions',
      totalSpent: 3000000,
      paymentCount: 8,
      averagePayment: 375000
    },
    {
      name: 'Global Services',
      totalSpent: 2800000,
      paymentCount: 10,
      averagePayment: 280000
    },
    {
      name: 'Supply Co',
      totalSpent: 2200000,
      paymentCount: 6,
      averagePayment: 366667
    },
    {
      name: 'Marketing Agency',
      totalSpent: 1800000,
      paymentCount: 4,
      averagePayment: 450000
    }
  ];

  // Add mock data for vendor comparison
  const vendorComparisonData = [
    {
      id: "Acme Corp",
      data: [
        { x: 'Jan', y: 350000 },
        { x: 'Feb', y: 400000 },
        { x: 'Mar', y: 450000 },
        { x: 'Apr', y: 380000 },
        { x: 'May', y: 420000 }
      ]
    },
    {
      id: "Tech Solutions",
      data: [
        { x: 'Jan', y: 250000 },
        { x: 'Feb', y: 300000 },
        { x: 'Mar', y: 280000 },
        { x: 'Apr', y: 320000 },
        { x: 'May', y: 340000 }
      ]
    }
  ];

  // Add mock data for budget analysis
  const budgetAnalysisData = [
    {
      month: 'Jan',
      actual: 350000,
      budget: 400000,
    },
    {
      month: 'Feb',
      actual: 420000,
      budget: 400000,
    },
    {
      month: 'Mar',
      actual: 380000,
      budget: 400000,
    },
    {
      month: 'Apr',
      actual: 450000,
      budget: 400000,
    },
    {
      month: 'May',
      actual: 390000,
      budget: 400000,
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

        <Box sx={{ mt: 4, mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Vendor & Payment Insights
          </Typography>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TopVendorsTable data={topVendorsData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <VendorComparisonChart data={vendorComparisonData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <BudgetAnalysisChart data={budgetAnalysisData} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
