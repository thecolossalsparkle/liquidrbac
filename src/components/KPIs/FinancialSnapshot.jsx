import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';

const KPICard = ({ title, value, change, icon: Icon, trend }) => {
  const isPositive = change >= 0;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        borderRadius: 4,
        background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)',
        border: '1px solid rgba(230, 235, 255, 0.9)',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              fontWeight: 500,
              mb: 1,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
              letterSpacing: '-0.5px',
              mb: 2,
            }}
          >
            {value}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {trend && (
              <>
                {isPositive ? (
                  <TrendingUpIcon
                    sx={{
                      fontSize: 20,
                      color: 'success.main',
                    }}
                  />
                ) : (
                  <TrendingDownIcon
                    sx={{
                      fontSize: 20,
                      color: 'error.main',
                    }}
                  />
                )}
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: isPositive ? 'success.main' : 'error.main',
                  }}
                >
                  {Math.abs(change)}%
                </Typography>
              </>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            p: 1.5,
            borderRadius: 3,
            bgcolor: 'primary.main',
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            boxShadow: '0 4px 14px rgba(25, 118, 210, 0.2)',
          }}
        >
          <Icon
            sx={{
              fontSize: 24,
              color: 'white',
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

const FinancialSnapshot = ({ data }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <KPICard
          title="Total Payments Processed"
          value={data?.totalPayments || '₹0'}
          change={15}
          trend={true}
          icon={PaymentsOutlinedIcon}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <KPICard
          title="Outstanding Payables"
          value={data?.outstandingPayables || '₹0'}
          change={-5}
          trend={true}
          icon={AccountBalanceWalletOutlinedIcon}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <KPICard
          title="Tax Liability"
          value={data?.taxLiability || '₹0'}
          icon={ReceiptLongOutlinedIcon}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <KPICard
          title="Upcoming Payments"
          value={data?.upcomingPayments || '₹0'}
          icon={EventOutlinedIcon}
        />
      </Grid>
    </Grid>
  );
};

export default FinancialSnapshot; 