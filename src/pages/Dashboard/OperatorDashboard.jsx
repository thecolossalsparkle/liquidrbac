import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import KPICard from '../../components/common/KPICard';
import RecentActivity from '../../components/common/RecentActivity';
import { 
  UploadIcon,
  ClockIcon,
  LightningBoltIcon
} from '@heroicons/react/outline';

const OperatorDashboard = () => {
  const kpiData = [
    { title: 'Invoices Uploaded', value: '89', icon: <UploadIcon className="h-6 w-6" /> },
    { title: 'Pending Uploads', value: '12', icon: <ClockIcon className="h-6 w-6" /> },
    { title: 'High-Priority Uploads', value: '3', icon: <LightningBoltIcon className="h-6 w-6" /> }
  ];

  const recentActivities = [
    { action: 'Uploaded Invoice #2345', timestamp: '2 minutes ago' },
    { action: 'Received new high-priority invoice for upload', timestamp: '15 minutes ago' },
    { action: 'Completed batch upload of 10 invoices', timestamp: '1 hour ago' }
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Operator Dashboard
      </Typography>
      
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Key Performance Indicators
        </Typography>
        <Grid container spacing={3}>
          {kpiData.map((kpi, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <KPICard {...kpi} />
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper sx={{ p: 3 }}>
        <RecentActivity activities={recentActivities} />
      </Paper>
    </Box>
  );
};

export default OperatorDashboard;
