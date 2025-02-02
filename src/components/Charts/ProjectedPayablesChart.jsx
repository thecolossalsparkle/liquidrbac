import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

const ProjectedPayablesChart = ({ data }) => {
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
          Projected Payables
        </Typography>
        <Box sx={{ height: 'calc(100% - 48px)' }}>
          <ResponsiveLine
            data={[
              {
                id: 'Projected Payables',
                data: data.map(d => ({
                  x: d.date,
                  y: d.amount,
                }))
              }
            ]}
            margin={{ top: 20, right: 30, bottom: 50, left: 70 }}
            xScale={{
              type: 'time',
              format: '%Y-%m-%d',
              useUTC: false,
              precision: 'day',
            }}
            yScale={{
              type: 'linear',
              min: 0,
              max: 'auto',
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              format: value => `$${value/1000}K`,
              legend: 'Amount',
              legendOffset: -50,
              legendPosition: 'middle',
            }}
            axisBottom={{
              format: '%b',
              tickValues: 'every 1 month',
              legend: 'Month',
              legendOffset: 36,
              legendPosition: 'middle',
            }}
            enablePoints={false}
            enableArea={true}
            areaBaselineValue={0}
            areaOpacity={0.15}
            curve="monotoneX"
            colors={['#4169E1']}
            defs={[
              {
                id: 'gradientArea',
                type: 'linearGradient',
                colors: [
                  { offset: 0, color: '#4169E1', opacity: 0.4 },
                  { offset: 100, color: '#4169E1', opacity: 0 },
                ],
              }
            ]}
            fill={[{ match: '*', id: 'gradientArea' }]}
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
            }}
            tooltip={({ point }) => (
              <Box
                sx={{
                  background: 'white',
                  padding: '12px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {new Date(point.data.x).toLocaleDateString(undefined, { month: 'long' })}
                </Typography>
                <Typography variant="body2">
                  ${point.data.y.toLocaleString()}
                </Typography>
              </Box>
            )}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default ProjectedPayablesChart; 