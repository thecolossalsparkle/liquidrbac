import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

// Modern, softer color palette
const COLORS = {
  'Current (0-30 Days)': '#34D399',    // Soft teal
  'Pending (31-60 Days)': '#FBBF24',   // Warm yellow
  'Overdue (61+ Days)': '#FB7185'      // Soft red
};

const PayableAgingChart = ({ data }) => {
  const formattedData = [
    { name: 'Current (0-30 Days)', value: data.recent },
    { name: 'Pending (31-60 Days)', value: data.medium },
    { name: 'Overdue (61+ Days)', value: data.overdue }
  ];

  // Custom Legend Component
  const CustomLegend = ({ payload }) => {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: 4,
          mt: 2
        }}
      >
        {payload.map((entry, index) => (
          <Box 
            key={`legend-${index}`}
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 1
            }}
          >
            <Box 
              sx={{ 
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: entry.color,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }} 
            />
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 500,
                color: 'text.primary',
              }}
            >
              {entry.value}
            </Typography>
          </Box>
        ))}
      </Box>
    );
  };

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
              color: payload[0].fill,
              mb: 0.5 
            }}
          >
            {payload[0].name}
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

  const total = formattedData.reduce((sum, item) => sum + item.value, 0);

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
            Accounts Payable Aging
          </Typography>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              color: 'text.secondary',
              fontWeight: 500 
            }}
          >
            Total: ₹{total.toLocaleString()}
          </Typography>
        </Box>
        <ResponsiveContainer width="100%" height="90%">
          <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <Pie
              data={formattedData}
              cx="50%"
              cy="40%"
              labelLine={false}
              label={({ percent }) => 
                `${(percent * 100).toFixed(0)}%`
              }
              outerRadius={100}
              innerRadius={70}
              dataKey="value"
              paddingAngle={3}
              strokeWidth={0}
            >
              {formattedData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[entry.name]}
                  style={{
                    filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.1))',
                  }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              content={<CustomLegend />}
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default PayableAgingChart; 