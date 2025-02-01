import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

const PAYMENT_COLORS = {
  onTime: '#10B981',    // A richer, more vibrant teal for on-time payments
  overdue: '#F43F5E'    // A warmer, more balanced red for overdue payments
};

const VendorPaymentDistributionChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Box 
          sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            p: 2,
            borderRadius: 2,
            boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.03)',
          }}
        >
          <Typography 
            variant="subtitle2" 
            sx={{ 
              fontWeight: 600,
              color: 'text.primary',
              mb: 0.5 
            }}
          >
            {`${payload[0].payload.vendor}`}
          </Typography>
          {payload.map((item, index) => (
            <Typography 
              key={index} 
              variant="h6" 
              sx={{ 
                fontWeight: 700,
                letterSpacing: '-0.5px',
                color: item.color 
              }}
            >
              {`${item.name}: ₹${item.value.toLocaleString()}`}
            </Typography>
          ))}
        </Box>
      );
    }
    return null;
  };

  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 3,
        height: '100%',
        borderRadius: 4,
        background: 'linear-gradient(145deg, #ffffff 0%, #f8faff 100%)',
        border: '1px solid rgba(230, 235, 255, 0.9)',
      }}
    >
      <Box sx={{ width: '100%', height: 350 }}>
        <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 400,
              fontSize: '1.25rem',
              color: 'text.primary',
              letterSpacing: '-0.5px'
            }}
          >
            Vendor Payment Distribution
          </Typography>
        </Box>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.06)" />
            <XAxis 
              dataKey="vendor" 
              label={{ value: 'Vendors', position: 'bottom', offset: 0 }}
              tick={{ fill: '#64748B', fontSize: 12 }}
            />
            <YAxis
              label={{ 
                value: 'Payment Amount (₹)', 
                angle: -90, 
                position: 'insideLeft',
                offset: -10
              }}
              tick={{ fill: '#64748B', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top" 
              height={36}
              wrapperStyle={{
                paddingTop: '15px'
              }}
            />
            <Bar 
              dataKey="onTime" 
              name="On-Time Payments" 
              stackId="a" 
              fill={PAYMENT_COLORS.onTime}
            />
            <Bar 
              dataKey="overdue" 
              name="Overdue Payments" 
              stackId="a" 
              fill={PAYMENT_COLORS.overdue}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default VendorPaymentDistributionChart; 