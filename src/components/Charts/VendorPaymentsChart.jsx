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
          <Typography variant="body2">
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
        <Box sx={{ mb: 3 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 400,
              fontSize: '1.25rem',
              color: 'text.primary',
              letterSpacing: '-0.5px'
            }}
          >
            Cash Outflow Trends
          </Typography>
        </Box>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 40,
              left: 40,
              bottom: 60,
            }}
          >
            <CartesianGrid 
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E2E8F0"
            />
            <XAxis 
              dataKey="vendor"
              axisLine={false}
              tickLine={false}
              tick={{ 
                fill: '#64748B',
                fontSize: 11,
              }}
              dy={8}
              angle={-35}
              textAnchor="end"
              interval={0}
              height={80}
              label={{ 
                value: 'Vendor Name', 
                position: 'outside',
                dy: 50,
                offset: 50,
                style: {
                  textAnchor: 'middle',
                  fill: '#475569',
                  fontSize: 13,
                  fontWeight: 200,
                }
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ 
                fill: '#64748B',
                fontSize: 12,
              }}
              tickFormatter={(value) => `₹${value/1000}K`}
              dx={-2}
              label={{ 
                value: 'Amount (₹)', 
                angle: -90, 
                position: 'outside',
                dx: -40,
                
                offset: -45,
                style: {
                  textAnchor: 'middle',
                  fill: '#475569',
                  fontSize: 13,
                  fontWeight: 200,
                }
              }}
            />
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(0, 0, 0, 0.04)' }}
            />
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