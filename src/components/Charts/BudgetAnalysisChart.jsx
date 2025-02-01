import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';

const BudgetAnalysisChart = ({ data }) => {
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
            Spending vs. Budget Analysis
          </Typography>
        </Box>
        <ResponsiveBar
          data={data}
          keys={['actual', 'budget']}
          indexBy="month"
          groupMode="grouped"
          margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          colors={['#3B82F6', '#34D399']} // Updated colors to match modern palette
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