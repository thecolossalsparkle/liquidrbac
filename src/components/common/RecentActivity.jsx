import React from 'react';
import { Card, Typography, List, ListItem, ListItemText, Divider, useTheme, useMediaQuery } from '@mui/material';

const RecentActivity = ({ activities }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ p: isMobile ? 1.5 : 2, mt: isMobile ? 2 : 3 }}>
      <Typography variant="h6" component="div" sx={{ mb: 2, fontSize: isMobile ? '1rem' : '1.25rem' }}>
        Recent Activity
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <React.Fragment key={index}>
            <ListItem sx={{ px: isMobile ? 1 : 2 }}>
              <ListItemText 
                primary={activity.action}
                secondary={activity.timestamp}
                primaryTypographyProps={{
                  fontSize: isMobile ? '0.875rem' : '1rem'
                }}
                secondaryTypographyProps={{
                  fontSize: isMobile ? '0.75rem' : '0.875rem'
                }}
              />
            </ListItem>
            {index < activities.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Card>
  );
};

export default RecentActivity; 