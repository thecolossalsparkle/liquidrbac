import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import KPICard from '../../components/common/KPICard';
import RecentActivity from '../../components/common/RecentActivity';
import { 
  ClockIcon,
  ExclamationCircleIcon,
  BanIcon,
  ExclamationIcon,
  CheckCircleIcon,
  LightningBoltIcon
} from '@heroicons/react/outline';

const ManagerDashboard = () => {
  const kpiData = [
    { title: 'Pending Approvals', value: '32', icon: <ClockIcon className="h-6 w-6" /> },
    { title: 'Overdue Approvals', value: '8', icon: <ExclamationCircleIcon className="h-6 w-6" /> },
    { title: 'Rejected Invoices', value: '15', icon: <BanIcon className="h-6 w-6" /> },
    { title: 'Issues Raised', value: '7', icon: <ExclamationIcon className="h-6 w-6" /> },
    { title: 'Invoices Approved', value: '156', icon: <CheckCircleIcon className="h-6 w-6" /> },
    { title: 'High-Priority Approvals', value: '4', icon: <LightningBoltIcon className="h-6 w-6" /> }
  ];

  const recentActivities = [
    { action: 'Approved Invoice #4567', timestamp: '5 minutes ago' },
    { action: 'Rejected Invoice #7890 due to discrepancy', timestamp: '30 minutes ago' },
    { action: 'New high-priority invoice requiring approval', timestamp: '1 hour ago' }
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Manager Dashboard
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

export default ManagerDashboard;
