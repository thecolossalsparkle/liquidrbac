import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Dashboard
        </Typography>
        
        <Grid container spacing={3}>
          {/* Dashboard content will go here */}
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary">
              Welcome to your dashboard. Content coming soon.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
