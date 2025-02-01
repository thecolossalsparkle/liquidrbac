import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

const COLORS = {
  'Recent (0-30 Days)': '#4caf50',    // Green for good
  'Medium (31-60 Days)': '#ff9800',   // Orange for warning
  'Overdue (61+ Days)': '#f44336'     // Red for critical
};

const PayableAgingChart = ({ data }) => {
  const formattedData = [
    { name: 'Recent (0-30 Days)', value: data.recent },
    { name: 'Medium (31-60 Days)', value: data.medium },
    { name: 'Overdue (61+ Days)', value: data.overdue }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <Box sx={{ bgcolor: 'background.paper', p: 1, border: '1px solid #ccc' }}>
          <Typography variant="body2">
            {`${payload[0].name}: ₹${payload[0].value.toLocaleString()}`}
          </Typography>
        </Box>
      );
    }
    return null;
  };

  return (
    <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
      <Box sx={{ width: '100%', height: 350 }}>
        <Typography variant="h6" gutterBottom>
          Accounts Payable Aging
        </Typography>
        <ResponsiveContainer width="100%" height="90%">
          <PieChart>
            <Pie
              data={formattedData}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, value }) => `₹${value.toLocaleString()}`}
              outerRadius={100}
              dataKey="value"
            >
              {formattedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              align="center"
              layout="horizontal"
              height={36}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default PayableAgingChart; 