import React from 'react';
import { Grid, Paper, Typography, Box, Button, Stack, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KPICard from '../../components/common/KPICard';
import RecentActivity from '../../components/common/RecentActivity';
import { 
  UsersIcon,
  DocumentTextIcon,
  ClockIcon,
  BanIcon,
  ExclamationCircleIcon,
  ChartBarIcon,
  ExclamationIcon,
  RefreshIcon,
  DownloadIcon
} from '@heroicons/react/outline';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const kpiData = [
    { title: 'Active Users', value: '150', icon: <UsersIcon className="h-6 w-6" /> },
    { title: 'Invoices Processed', value: '1,234', icon: <DocumentTextIcon className="h-6 w-6" /> },
    { title: 'Pending Approvals', value: '45', icon: <ClockIcon className="h-6 w-6" /> },
    { title: 'Rejected Invoices', value: '23', icon: <BanIcon className="h-6 w-6" /> },
    { title: 'Overdue Invoices', value: '12', icon: <ExclamationCircleIcon className="h-6 w-6" /> },
    { title: 'Audit Logs Accessed', value: '89', icon: <ChartBarIcon className="h-6 w-6" /> },
    { title: 'Issues Raised', value: '15', icon: <ExclamationIcon className="h-6 w-6" /> },
    { title: 'ERP Sync Rate', value: '98%', icon: <RefreshIcon className="h-6 w-6" /> }
  ];

  const recentActivities = [
    { action: 'New invoice uploaded by Operator1', timestamp: '2 minutes ago' },
    { action: 'Invoice #1234 approved by Manager', timestamp: '15 minutes ago' },
    { action: 'System audit completed by Auditor', timestamp: '1 hour ago' }
  ];

  return (
    <Box>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'flex-start' : 'center',
        gap: isMobile ? 2 : 0,
        mb: 4 
      }}>
        <Typography variant="h4" component="h1" sx={{
          fontSize: isMobile ? '1.5rem' : '2rem'
        }}>
          Admin Dashboard
        </Typography>
        <Stack 
          direction={isMobile ? 'column' : 'row'} 
          spacing={2}
          sx={{ width: isMobile ? '100%' : 'auto' }}
        >
          <Button 
            variant="contained" 
            size="small"
            fullWidth={isMobile}
            startIcon={<UsersIcon className="h-5 w-5" />}
            onClick={() => navigate('/users')}
          >
            Manage Users
          </Button>
          <Button 
            variant="contained"
            size="small"
            fullWidth={isMobile}
            startIcon={<ChartBarIcon className="h-5 w-5" />}
            onClick={() => navigate('/audit-logs')}
          >
            Audit Logs
          </Button>
          <Button 
            variant="contained"
            size="small"
            fullWidth={isMobile}
            startIcon={<DownloadIcon className="h-5 w-5" />}
            onClick={() => navigate('/')}
          >
            Download Cashflow Reports
          </Button>
        </Stack>
      </Box>
      
      <Paper sx={{ p: isMobile ? 2 : 3, mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Key Performance Indicators
        </Typography>
        <Grid container spacing={isMobile ? 2 : 3}>
          {kpiData.map((kpi, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <KPICard {...kpi} />
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper sx={{ p: isMobile ? 2 : 3 }}>
        <RecentActivity activities={recentActivities} />
      </Paper>
    </Box>
  );
};

export default AdminDashboard;
