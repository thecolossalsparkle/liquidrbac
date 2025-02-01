import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';

// Modern, distinct color palette
const COLORS = {
  'Utilities': '#34D399',      // Soft teal
  'Rent': '#F59E0B',          // Deep amber
  'Supplies': '#EC4899',      // Pink
  'Services': '#3B82F6',      // Blue
  'Logistics': '#8B5CF6',     // Purple
  'Others': '#64748B'         // Slate gray
};

const ExpenseBreakdownChart = ({ data }) => {
  // Custom Legend Component
  const CustomLegend = ({ payload }) => {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: 1,
          mt: 1,
          flexWrap: 'wrap',
          px: 2
        }}
      >
        {payload.map((entry, index) => (
          <Box 
            key={`legend-${index}`}
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: 0.5
            }}
          >
            <Box 
              sx={{ 
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: entry.color,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }} 
            />
            <Typography 
              variant="body2" 
              sx={{ 
                fontWeight: 600,
                color: 'text.primary',
                fontSize: '0.875rem'
              }}
            >
              {`${entry.value} (${(data[index].value).toFixed(1)}%)`}
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
            {payload[0].value}%
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
            Expense Breakdown
          </Typography>
          <Typography 
            variant="subtitle2" 
            sx={{ 
              color: 'text.secondary',
              fontWeight: 500 
            }}
          >
            Total: 100%
          </Typography>
        </Box>
        <ResponsiveContainer width="100%" height="90%">
          <PieChart margin={{ top: 10, right: 30, bottom: 30, left: 30 }}>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={{
                strokeWidth: 1,
                stroke: '#888888',
                length: 15,
                length2: 15,
              }}
              label={({ name, value, x, y, cx: pieX }) => {
                return (
                  <text 
                    x={x} 
                    y={y} 
                    fill="#444444"
                    textAnchor={x > pieX ? "start" : "end"}
                    dominantBaseline="central"
                    fontSize="12px"
                    fontWeight="900"
                  >
                    {`${name} (${value.toFixed(1)}%)`}
                  </text>
                );
              }}
              outerRadius={75}
              innerRadius={50}
              dataKey="value"
              paddingAngle={3}
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[entry.name] || COLORS.Others}
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
              wrapperStyle={{
                paddingTop: '15px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
};

export default ExpenseBreakdownChart; 