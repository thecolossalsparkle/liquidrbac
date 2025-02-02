import React from 'react';
import { Box, Button } from '@mui/material';

const NavigationTabs = ({ currentTab, onTabChange }) => {
  const commonButtonStyles = {
    minWidth: '180px',
    py: 1,
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 500,
    transition: 'all 0.2s ease-in-out',
  };

  const getButtonStyles = (isActive) => ({
    ...commonButtonStyles,
    backgroundColor: isActive ? '#fff' : 'transparent',
    color: isActive ? 'primary.main' : 'text.secondary',
    boxShadow: isActive ? 1 : 0,
    '&:hover': {
      backgroundColor: isActive ? '#fff' : 'rgba(25, 118, 210, 0.08)',
      transform: 'translateY(-1px)',
      boxShadow: isActive ? 2 : '0 2px 5px rgba(0,0,0,0.08)',
    },
    '&:active': {
      transform: 'translateY(0)',
    }
  });

  return (
    <Box 
      sx={{ 
        display: 'flex',
        gap: 1,
        mb: 3,
        backgroundColor: '#f5f5f5',
        padding: '4px',
        borderRadius: '12px',
        width: 'fit-content',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.03)'
      }}
    >
      <Button
        onClick={() => onTabChange(0)}
        sx={getButtonStyles(currentTab === 0)}
      >
        Expenditure Analysis
      </Button>
      <Button
        onClick={() => onTabChange(1)}
        sx={getButtonStyles(currentTab === 1)}
      >
        Vendor Analysis
      </Button>
      <Button
        onClick={() => onTabChange(2)}
        sx={getButtonStyles(currentTab === 2)}
      >
        Predictive Analysis
      </Button>
    </Box>
  );
};

export default NavigationTabs; 