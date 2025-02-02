import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Skeleton, Alert, IconButton, Tooltip, Tabs, Tab, Button } from '@mui/material';
import FinancialSnapshot from '../../components/KPIs/FinancialSnapshot';
import VendorPaymentsChart from '../../components/Charts/VendorPaymentsChart';
import ExpenseBreakdownChart from '../../components/Charts/ExpenseBreakdownChart';
import PayableAgingChart from '../../components/Charts/PayableAgingChart';
import VendorPaymentDistributionChart from '../../components/Charts/VendorPaymentDistributionChart';
import PaymentTimelineChart from '../../components/Charts/PaymentTimelineChart';
import TopVendorsTable from '../../components/Tables/TopVendorsTable';
import VendorComparisonChart from '../../components/Charts/VendorComparisonChart';
import BudgetAnalysisChart from '../../components/Charts/BudgetAnalysisChart';
import RefreshIcon from '@mui/icons-material/Refresh';
import InfoIcon from '@mui/icons-material/Info';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { format } from 'date-fns';
import ExpenditureAnalysis from './ExpenditureAnalysis';
import VendorAnalysis from './VendorAnalysis';
import PredictiveAnalysis from './PredictiveAnalysis';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [currentTab, setCurrentTab] = useState(0);

  // Move fetchDashboardData outside useEffect
  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data setup
      const data = {
        financialData: {
          totalPayments: '₹1,50,000',
          outstandingPayables: '₹45,000',
          taxLiability: '₹25,000',
          upcomingPayments: '₹30,000',
          latePayments: '5',
        },
        // ... rest of your mock data ...
      };
      
      setDashboardData(data);
      setError(null);
    } catch (err) {
      setError('Failed to load dashboard data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleTabChange = (newValue) => {
    setCurrentTab(newValue);
  };

  const handleRefresh = () => {
    fetchDashboardData();
    setLastUpdated(new Date());
  };

  const handleExport = () => {
    // Add your export logic here
    console.log('Exporting report...');
  };

  const SectionHeader = ({ title, tooltip }) => (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 1,
      mb: 2,
      borderBottom: '1px solid',
      borderColor: 'divider',
      pb: 1
    }}>
      <Typography variant="h6" component="h2">
        {title}
      </Typography>
      {tooltip && (
        <Tooltip title={tooltip}>
          <InfoIcon fontSize="small" color="action" />
        </Tooltip>
      )}
    </Box>
  );

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Skeleton variant="text" width={200} height={40} sx={{ mb: 4 }} />
          <Grid container spacing={3}>
            {[...Array(4)].map((_, index) => (
              <Grid item xs={12} md={6} lg={3} key={index}>
                <Skeleton variant="rectangular" height={120} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Alert severity="error" sx={{ mb: 4 }}>{error}</Alert>
        </Box>
      </Container>
    );
  }

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
      vendor: 'Vendor 1',
      date: '2024-01-01',
      amount: 250000
    },
    {
      vendor: 'Vendor 1',
      date: '2024-02-01',
      amount: 320000
    },
    {
      vendor: 'Vendor 1',
      date: '2024-03-01',
      amount: 280000
    },
    {
      vendor: 'Vendor 1',
      date: '2024-04-01',
      amount: 350000
    },
    {
      vendor: 'Vendor 1',
      date: '2024-05-01',
      amount: 300000
    },
    {
      vendor: 'Vendor 2',
      date: '2024-01-01',
      amount: 200000
    },
    {
      vendor: 'Vendor 2',
      date: '2024-02-01',
      amount: 280000
    },
    {
      vendor: 'Vendor 2',
      date: '2024-03-01',
      amount: 240000
    },
    {
      vendor: 'Vendor 2',
      date: '2024-04-01',
      amount: 320000
    },
    {
      vendor: 'Vendor 2',
      date: '2024-05-01',
      amount: 260000
    },
    // Add more vendors and data points as needed
  ];

  // Update the budget analysis mock data
  const budgetAnalysisData = [
    {
      month: 'Jan',
      actual: 15000,
      budget: 25000,
    },
    {
      month: 'Mar',
      actual: 35000,
      budget: 40000,
    },
    {
      month: 'May',
      actual: 55000,
      budget: 40000,
    },
    {
      month: 'Jul',
      actual: 20000,
      budget: 25000,
    }
  ];

  // Add this to your mock data section
  const projectedPayablesData = [
    { date: '2024-01-01', amount: 3000 },
    { date: '2024-02-01', amount: 4200 },
    { date: '2024-03-01', amount: 3800 },
    { date: '2024-04-01', amount: 4500 },
    { date: '2024-05-01', amount: 4100 },
    { date: '2024-06-01', amount: 4800 },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h1">
            Dashboard
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Last updated: {format(lastUpdated, 'dd MMM yyyy HH:mm')}
            </Typography>
            <Tooltip title="Refresh dashboard">
              <IconButton onClick={handleRefresh} size="small">
                <RefreshIcon />
              </IconButton>
            </Tooltip>
            <Button
              variant="contained"
              startIcon={<FileDownloadIcon />}
              onClick={handleExport}
              size="small"
              sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#1565c0'
                }
              }}
            >
              Export Report
            </Button>
          </Box>
        </Box>

        {currentTab === 0 && (
          <ExpenditureAnalysis 
            kpiData={dashboardData?.financialData}
            vendorPaymentsData={vendorPaymentsData}
            expenseBreakdownData={expenseBreakdownData}
            timelineData={timelineData}
            currentTab={currentTab}
            onTabChange={handleTabChange}
          />
        )}
        
        {currentTab === 1 && (
          <VendorAnalysis 
            kpiData={dashboardData?.financialData}
            payableAgingData={payableAgingData}
            topVendorsData={topVendorsData}
            distributionData={vendorPaymentDistributionData}
            comparisonData={vendorComparisonData}
            currentTab={currentTab}
            onTabChange={handleTabChange}
          />
        )}
        
        {currentTab === 2 && (
          <PredictiveAnalysis 
            kpiData={dashboardData?.financialData}
            budgetData={budgetAnalysisData}
            projectedPayablesData={projectedPayablesData}
            currentTab={currentTab}
            onTabChange={handleTabChange}
          />
        )}
      </Box>
    </Container>
  );
};

export default Dashboard;
