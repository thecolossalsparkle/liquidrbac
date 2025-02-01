import React from 'react';
import { 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Typography 
} from '@mui/material';

const TopVendorsTable = ({ data }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Top Vendors by Expenses
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vendor Name</TableCell>
              <TableCell align="right">Total Spent</TableCell>
              <TableCell align="right">Payment Count</TableCell>
              <TableCell align="right">Average Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((vendor) => (
              <TableRow key={vendor.name}>
                <TableCell component="th" scope="row">
                  {vendor.name}
                </TableCell>
                <TableCell align="right">₹{vendor.totalSpent.toLocaleString()}</TableCell>
                <TableCell align="right">{vendor.paymentCount}</TableCell>
                <TableCell align="right">₹{vendor.averagePayment.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TopVendorsTable; 