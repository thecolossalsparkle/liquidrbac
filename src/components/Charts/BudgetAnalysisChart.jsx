import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';

const BudgetAnalysisChart = ({ data }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Spending vs. Budget Analysis
      </Typography>
      <Box sx={{ height: 350 }}>
        <ResponsiveBar
          data={data}
          keys={['actual', 'budget']}
          indexBy="month"
          groupMode="grouped"
          margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          colors={['#2196f3', '#4caf50']} // Blue for actual, Green for budget
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Month',
            legendPosition: 'middle',
            legendOffset: 32
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Amount (₹)',
            legendPosition: 'middle',
            legendOffset: -40,
            format: value => `₹${(value/1000)}K`
          }}
          labelFormat={value => `₹${(value/1000)}K`}
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
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
        />
      </Box>
    </Paper>
  );
};

export default BudgetAnalysisChart; 