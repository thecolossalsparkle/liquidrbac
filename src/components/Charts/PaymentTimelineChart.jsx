import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

const PaymentTimelineChart = ({ data }) => {
  // Define custom colors for the lines
  const customColors = [
    '#34D399', // Soft teal for upcoming payments
    '#EF4444'  // Red for overdue payments (changed from '#F59E0B')
  ];

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
      <Box sx={{ width: '100%', height: 500 }}>
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
            Payment Timeline
          </Typography>
        </Box>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 140, bottom: 70, left: 80 }}
          xScale={{ type: 'time', format: '%Y-%m-%d', precision: 'day' }}
          xFormat="time:%Y-%m-%d"
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
          }}
          colors={customColors}
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
          axisBottom={{
            format: '%b %d',
            tickValues: 'every 7 days',
            legend: 'Date',
            legendOffset: 50,
            legendPosition: 'middle',
            tickRotation: -45
          }}
          axisLeft={{
            format: value => `₹${(value/1000)}K`,
            legend: 'Amount (in thousands ₹)',
            legendOffset: -60,
            legendPosition: 'middle'
          }}
          pointSize={8}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabelYOffset={-12}
          useMesh={true}
          enableSlices="x"
          sliceTooltip={({ slice }) => (
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
                sx={{ 
                  mb: 1,
                  fontWeight: 500,
                  color: 'text.secondary'
                }}
              >
                {slice.points[0].data.xFormatted}
              </Typography>
              {slice.points.map(point => (
                <Box
                  key={point.id}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    py: 0.5,
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      backgroundColor: point.serieColor,
                    }}
                  />
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: 'text.primary',
                    }}
                  >
                    {point.serieId}: ₹{point.data.yFormatted.toLocaleString()}
                  </Typography>
                </Box>
              ))}
            </Box>
          )}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 8,
              itemDirection: 'left-to-right',
              itemWidth: 100,
              itemHeight: 20,
              itemOpacity: 0.85,
              symbolSize: 8,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
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

export default PaymentTimelineChart; 