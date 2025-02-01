import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

const VendorPaymentsChart = ({ data }) => {
  const CustomTooltip = ({ active, payload, label }) => {
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
              color: '#2196f3',
              mb: 0.5 
            }}
          >
            {label}
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700,
              letterSpacing: '-0.5px' 
            }}
          >
            ₹{payload[0].value.toLocaleString()}
          </Typography>
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
      <Box sx={{ width: '100%', height: 400 }}>
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
            Vendor Payments
          </Typography>
        </Box>
        <ResponsiveContainer width="100%" height="95%">
          <BarChart 
            data={data} 
            margin={{ top: 15, right: 30, left: 50, bottom: 70 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.06)" />
            <XAxis 
              dataKey="vendor" 
              label={{ 
                value: 'Vendor Names', 
                position: 'bottom',
                offset: 0,
                dy: 25,
                dx: -40,
                fontSize: 12,
                fill: '#64748B'
              }}
              tick={{ 
                angle: -45, 
                textAnchor: 'end',
                fontSize: 11,
                dy: 8,
                dx: 0,
                fill: '#64748B'
              }}
              height={70}
              interval={0}
              stroke="#E2E8F0"
            />
            <YAxis
              label={{ 
                value: 'Amount (₹)', 
                angle: -90, 
                position: 'insideLeft',
                offset: -5,
                dy: 45,
                dx: -12,
                fontSize: 12,
                fill: '#64748B'
              }}
              tickFormatter={(value) => `₹${value.toLocaleString()}`}
              fontSize={11}
              width={65}
              tickMargin={3}
              stroke="#E2E8F0"
              tick={{ fill: '#64748B' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top" 
              height={36}
              wrapperStyle={{ 
                fontSize: 12,
                fontWeight: 500,
                color: '#64748B'
              }}
            />
            <Bar 
              dataKey="amount" 
              name="Payment Amount" 
              fill="#2196f3"
              maxBarSize={50}
              radius={[4, 4, 0, 0]}
              style={{
                filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.1))',
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default VendorPaymentsChart; 