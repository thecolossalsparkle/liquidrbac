import React from 'react';
import { Paper, Typography, Box, useTheme, useMediaQuery } from '@mui/material';

const KPICard = ({ title, value, icon }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Paper 
      elevation={2}
      sx={{ 
        p: isMobile ? 1.5 : 2,
        height: '100%',
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
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
        mb: isMobile ? 0 : 1
      }}>
        {icon}
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isMobile ? 'flex-start' : 'center'
      }}>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align={isMobile ? "left" : "center"}
          sx={{ fontSize: isMobile ? '0.75rem' : '0.875rem' }}
        >
          {title}
        </Typography>
        <Typography 
          variant="h5" 
          component="div" 
          align={isMobile ? "left" : "center"}
          sx={{ 
            fontWeight: 'bold',
            fontSize: isMobile ? '1.25rem' : '1.5rem'
          }}
        >
          {value}
        </Typography>
      </Box>
    </Paper>
  );
};

export default KPICard; 