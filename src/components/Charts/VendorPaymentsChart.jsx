import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

const VendorPaymentsChart = ({ data }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
      <Box sx={{ width: '100%', height: 400 }}>
        <Typography variant="h6" gutterBottom sx={{ mb: 1 }}>
          Vendor Payments
        </Typography>
        <ResponsiveContainer width="100%" height="95%">
          <BarChart 
            data={data} 
            margin={{ top: 15, right: 30, left: 50, bottom: 70 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="vendor" 
              label={{ 
                value: 'Vendor Names', 
                position: 'bottom',
                offset: 0,
                dy: 25,
                dx: -40,
                fontSize: 12
              }}
              tick={{ 
                angle: -45, 
                textAnchor: 'end',
                fontSize: 11,
                dy: 8,
                dx: 0,
              }}
              height={70}
              interval={0}
            />
            <YAxis
              label={{ 
                value: 'Amount (₹)', 
                angle: -90, 
                position: 'insideLeft',
                offset: -5,
                dy: 45,
                dx: -12,
                fontSize: 12
              }}
              tickFormatter={(value) => `₹${value.toLocaleString()}`}
              fontSize={11}
              width={65}
              tickMargin={3}
            />
            <Tooltip 
              formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
              labelStyle={{ color: '#666' }}
              contentStyle={{ fontSize: 12 }}
            />
            <Legend 
              verticalAlign="top" 
              height={36}
              wrapperStyle={{ fontSize: 12 }}
            />
            <Bar 
              dataKey="amount" 
              name="Payment Amount" 
              fill="#2196f3"
              maxBarSize={50}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default VendorPaymentsChart; 