import React from 'react';
import { Card, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const RecentActivity = ({ activities }) => {
  return (
    <Card sx={{ p: 2, mt: 3 }}>
      <Typography variant="h6" component="div" sx={{ mb: 2 }}>
        Recent Activity
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText 
                primary={activity.action}
                secondary={activity.timestamp}
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