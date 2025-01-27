import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import KPICard from '../../components/common/KPICard';
import RecentActivity from '../../components/common/RecentActivity';
import { 
  SearchCircleIcon,
  FlagIcon,
  ExclamationIcon,
  BanIcon
} from '@heroicons/react/outline';

const AuditorDashboard = () => {
  const kpiData = [
    { title: 'Audit Logs Reviewed', value: '234', icon: <SearchCircleIcon className="h-6 w-6" /> },
    { title: 'Flagged Invoices', value: '18', icon: <FlagIcon className="h-6 w-6" /> },
    { title: 'High-Priority Audits', value: '5', icon: <ExclamationIcon className="h-6 w-6" /> },
    { title: 'Rejected After Audit', value: '8', icon: <BanIcon className="h-6 w-6" /> }
  ];

  const recentActivities = [
    { action: 'Completed audit review of Invoice #9876', timestamp: '10 minutes ago' },
    { action: 'Flagged Invoice #5432 for compliance review', timestamp: '1 hour ago' },
    { action: 'Completed high-priority audit for Invoice #7890', timestamp: '2 hours ago' }
  ];

  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
        Auditor Dashboard
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

export default AuditorDashboard;
