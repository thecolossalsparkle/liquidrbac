import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

const PAYMENT_COLORS = {
  onTime: '#4caf50',    // Green for on-time payments
  overdue: '#f44336'    // Red for overdue payments
};

const VendorPaymentDistributionChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Box sx={{ bgcolor: 'background.paper', p: 1, border: '1px solid #ccc' }}>
          <Typography variant="body2" sx={{ color: 'text.primary' }}>
            {`${payload[0].payload.vendor}`}
          </Typography>
          {payload.map((item, index) => (
            <Typography key={index} variant="body2" sx={{ color: item.color }}>
              {`${item.name}: ₹${item.value.toLocaleString()}`}
            </Typography>
          ))}
        </Box>
      );
    }
    return null;
  };

  return (
    <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
      <Box sx={{ width: '100%', height: 350 }}>
        <Typography variant="h6" gutterBottom>
          Vendor Payment Distribution
        </Typography>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="vendor" 
              label={{ value: 'Vendors', position: 'bottom', offset: 0 }}
            />
            <YAxis
              label={{ 
                value: 'Payment Amount (₹)', 
                angle: -90, 
                position: 'insideLeft',
                offset: -10
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="onTime" name="On-Time Payments" stackId="a" fill={PAYMENT_COLORS.onTime} />
            <Bar dataKey="overdue" name="Overdue Payments" stackId="a" fill={PAYMENT_COLORS.overdue} />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default VendorPaymentDistributionChart; 