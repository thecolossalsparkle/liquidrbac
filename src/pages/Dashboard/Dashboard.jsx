import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import FinancialSnapshot from '../../components/KPIs/FinancialSnapshot';

const Dashboard = () => {
  // Mock data - replace with actual data from your API
  const financialData = {
    totalPayments: '$150,000',
    outstandingPayables: '$45,000',
    taxLiability: '$25,000',
    upcomingPayments: '$30,000',
    latePayments: '5',
  };

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

        <Grid container spacing={3}>
          {/* Other dashboard content will go here */}
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary">
              Additional dashboard content coming soon.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
