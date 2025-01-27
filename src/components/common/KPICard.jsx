import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const KPICard = ({ title, value, icon }) => {
  return (
    <Paper 
      elevation={2}
      sx={{ 
        p: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        bgcolor: 'background.default',
        '&:hover': {
          bgcolor: 'background.paper',
          transform: 'translateY(-2px)',
          transition: 'all 0.3s'
        }
      }}
    >
      <Box sx={{ 
        color: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 1
      }}>
        {icon}
      </Box>
      <Typography variant="body2" color="text.secondary" align="center">
        {title}
      </Typography>
      <Typography variant="h5" component="div" align="center" sx={{ fontWeight: 'bold' }}>
        {value}
      </Typography>
    </Paper>
  );
};

export default KPICard; 