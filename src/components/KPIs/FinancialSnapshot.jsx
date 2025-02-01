import React from 'react';
import { Grid } from '@mui/material';
import KPICard from '../common/KPICard';
import {
  AccountBalance,
  Payment,
  Receipt,
  Warning,
  Schedule,
} from '@mui/icons-material';

const FinancialSnapshot = ({ data }) => {
  const kpiItems = [
    {
      title: 'Total Payments Made',
      value: data?.totalPayments || '$0',
      icon: <Payment fontSize="large" />,
    },
    {
      title: 'Outstanding Payables',
      value: data?.outstandingPayables || '$0',
      icon: <Receipt fontSize="large" />,
    },
    {
      title: 'Tax Liability',
      value: data?.taxLiability || '$0',
      icon: <AccountBalance fontSize="large" />,
    },
    {
      title: 'Upcoming Payments',
      value: data?.upcomingPayments || '$0',
      icon: <Schedule fontSize="large" />,
    },
    {
      title: 'Late Payments',
      value: data?.latePayments || '0',
      icon: <Warning fontSize="large" />,
    },
  ];

  return (
    <Grid container spacing={3}>
      {kpiItems.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
          <KPICard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FinancialSnapshot; 