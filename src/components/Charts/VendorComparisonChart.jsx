import React, { useState } from 'react';
import { Box, Typography, Paper, FormControl, Select, MenuItem } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';

const VendorComparisonChart = ({ data }) => {
  const [vendor1, setVendor1] = useState('Vendor 1');
  const [vendor2, setVendor2] = useState('Vendor 2');
  const [timeRange, setTimeRange] = useState('Monthly Spending');

  // Get unique vendors from data
  const vendors = [...new Set(data.map(item => item.vendor))];

  const chartData = [
    {
      id: vendor1,
      data: data
        .filter(d => d.vendor === vendor1)
        .map(d => ({
          x: d.date,
          y: d.amount
        }))
    },
    {
      id: vendor2,
      data: data
        .filter(d => d.vendor === vendor2)
        .map(d => ({
          x: d.date,
          y: d.amount
        }))
    }
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
        <Box sx={{ 
          mb: 3, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2
        }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 400,
              fontSize: '1.25rem',
              color: 'text.primary',
              letterSpacing: '-0.5px'
            }}
          >
            Vendor Comparison
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <Select
                value={vendor1}
                onChange={(e) => setVendor1(e.target.value)}
                sx={{ bgcolor: 'white' }}
              >
                {vendors.map(vendor => (
                  <MenuItem key={vendor} value={vendor}>{vendor}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <Select
                value={vendor2}
                onChange={(e) => setVendor2(e.target.value)}
                sx={{ bgcolor: 'white' }}
              >
                {vendors.map(vendor => (
                  <MenuItem key={vendor} value={vendor}>{vendor}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <Select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                sx={{ bgcolor: 'white' }}
              >
                <MenuItem value="Monthly Spending">Monthly Spending</MenuItem>
                <MenuItem value="Quarterly Spending">Quarterly Spending</MenuItem>
                <MenuItem value="Yearly Spending">Yearly Spending</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <ResponsiveLine
          data={chartData}
          margin={{ top: 20, right: 20, bottom: 60, left: 80 }}
          xScale={{ 
            type: 'time',
            format: '%Y-%m-%d',
            useUTC: false,
            precision: 'day',
          }}
          yScale={{ 
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Amount (₹)',
            legendOffset: -60,
            legendPosition: 'middle',
            format: value => `₹${(value/1000)}K`
          }}
          axisBottom={{
            format: '%b %d',
            tickValues: 'every 1 month',
            legend: 'Time',
            legendOffset: 40,
            legendPosition: 'middle'
          }}
          enableGridX={false}
          curve="monotoneX"
          enableArea={true}
          areaOpacity={0.15}
          enablePoints={false}
          colors={['#4169E1', '#FF69B4']} // Blue and Pink colors
          defs={[
            {
              id: 'gradientA',
              type: 'linearGradient',
              colors: [
                { offset: 0, color: '#4169E1', opacity: 0.4 },
                { offset: 100, color: '#4169E1', opacity: 0 },
              ],
            },
            {
              id: 'gradientB',
              type: 'linearGradient',
              colors: [
                { offset: 0, color: '#FF69B4', opacity: 0.4 },
                { offset: 100, color: '#FF69B4', opacity: 0 },
              ],
            },
          ]}
          fill={[
            { match: { id: vendor1 }, id: 'gradientA' },
            { match: { id: vendor2 }, id: 'gradientB' },
          ]}
          useMesh={true}
          animate={true}
          motionConfig="gentle"
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
              <Typography variant="body2" sx={{ fontWeight: 600, color: point.serieColor }}>
                {point.serieId}
              </Typography>
              <Typography variant="body2">
                Date: {new Date(point.data.x).toLocaleDateString()}
              </Typography>
              <Typography variant="body2">
                Amount: ₹{point.data.y.toLocaleString()}
              </Typography>
            </Box>
          )}
        />
      </Box>
    </Paper>
  );
};

export default VendorComparisonChart; 