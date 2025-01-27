import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import KPICard from '../../components/common/KPICard';
import RecentActivity from '../../components/common/RecentActivity';
import { 
  DocumentTextIcon,
  ClockIcon,
  BanIcon,
  RefreshIcon,
  ExclamationIcon
} from '@heroicons/react/outline';

const AccountantDashboard = () => {
  const kpiData = [
    { title: 'Invoices Processed', value: '456', icon: <DocumentTextIcon className="h-6 w-6" /> },
    { title: 'Pending Approvals with Manager', value: '28', icon: <ClockIcon className="h-6 w-6" /> },
    { title: 'Rejected Invoices', value: '12', icon: <BanIcon className="h-6 w-6" /> },
    { title: 'ERP Sync Rate', value: '95%', icon: <RefreshIcon className="h-6 w-6" /> },
    { title: 'High-Priority Invoices', value: '8', icon: <ExclamationIcon className="h-6 w-6" /> }
  ];

  const recentActivities = [
    { action: 'Invoice #5678 submitted for approval', timestamp: '5 minutes ago' },
    { action: 'Invoice #1234 rejected by Manager', timestamp: '30 minutes ago' },
    { action: 'Processed 15 new invoices', timestamp: '2 hours ago' }
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Accountant Dashboard
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

export default AccountantDashboard;
