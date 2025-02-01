import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

const VendorPaymentsChart = ({ data }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
      <Box sx={{ width: '100%', height: 350 }}>
        <Typography variant="h6" gutterBottom>
          Vendor Payments
        </Typography>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="vendor" 
              label={{ value: 'Vendors', position: 'bottom', offset: 0 }}
            />
            <YAxis
              label={{ 
                value: 'Payment Amount ($)', 
                angle: -90, 
                position: 'insideLeft',
                offset: -10
              }}
            />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="amount" name="Payment Amount" fill="#2196f3" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default VendorPaymentsChart; 