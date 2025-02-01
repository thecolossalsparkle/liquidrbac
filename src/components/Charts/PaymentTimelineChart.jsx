import React from 'react';
import { Box, useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

const PaymentTimelineChart = ({ data }) => {
  const theme = useTheme();

  // Define custom colors for the lines
  const customColors = [
    '#4caf50', // Green for upcoming payments
    '#f44336'  // Red for overdue payments
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: 1,
        p: 3,
        boxShadow: 1
      }}
    >
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
        colors={customColors} // Add custom colors
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
          <div
            style={{
              background: 'white',
              padding: '9px 12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            <div style={{marginBottom: '5px'}}>{slice.points[0].data.xFormatted}</div>
            {slice.points.map(point => (
              <div
                key={point.id}
                style={{
                  color: point.serieColor,
                  padding: '3px 0',
                }}
              >
                <strong>{point.serieId}:</strong> ₹{point.data.yFormatted.toLocaleString()}
              </div>
            ))}
          </div>
        )}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemDirection: 'left-to-right',
            itemWidth: 100,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
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
  );
};

export default PaymentTimelineChart; 