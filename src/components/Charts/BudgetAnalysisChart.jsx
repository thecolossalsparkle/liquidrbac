import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';

const BudgetAnalysisChart = ({ data }) => {
  // Transform data to show over/under budget amounts
  const transformedData = data.map(d => {
    const spending = d.actual;
    const budget = d.budget;
    const overBudget = spending > budget ? spending - budget : 0;
    const underBudget = budget > spending ? budget - spending : 0;
    
    return {
      month: d.month,
      Spending: spending,
      'Over Budget': overBudget,
      'Under Budget': underBudget,
    };
  });

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '400px',
        borderRadius: 4,
        background: 'linear-gradient(145deg, #ffffff 0%, #f8faff 100%)',
        border: '1px solid rgba(230, 235, 255, 0.9)',
      }}
    >
      <Box sx={{ height: '100%' }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            mb: 3,
            color: 'text.primary',
          }}
        >
          Spending vs Budget Analysis
        </Typography>
        <Box sx={{ height: 'calc(100% - 48px)' }}>
          <ResponsiveBar
            data={transformedData}
            keys={['Spending', 'Over Budget', 'Under Budget']}
            indexBy="month"
            margin={{ top: 20, right: 130, bottom: 50, left: 70 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            colors={['#2563eb', '#ef4444', '#22c55e']}
            borderRadius={4}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Month',
              legendPosition: 'middle',
              legendOffset: 40
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: 'Amount (₹)',
              legendPosition: 'middle',
              legendOffset: -50,
              format: value => `₹${value/1000}K`
            }}
            enableLabel={false}
            legends={[
              {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 10,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemOpacity: 1
                    }
                  }
                ]
              }
            ]}
            theme={{
              axis: {
                ticks: {
                  text: {
                    fontSize: 12,
                    fill: '#64748B',
                  },
                },
                legend: {
                  text: {
                    fontSize: 13,
                    fill: '#475569',
                    fontWeight: 500,
                  },
                },
              },
              grid: {
                line: {
                  stroke: '#E2E8F0',
                  strokeWidth: 1,
                },
              },
              legends: {
                text: {
                  fontSize: 12,
                  fill: '#64748B',
                },
              },
            }}
            tooltip={({ id, value, color }) => (
              <Box
                sx={{
                  padding: '12px',
                  background: 'white',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600, color }}>
                  {id}
                </Typography>
                <Typography variant="body2">
                  ₹{value.toLocaleString()}
                </Typography>
              </Box>
            )}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default BudgetAnalysisChart; 