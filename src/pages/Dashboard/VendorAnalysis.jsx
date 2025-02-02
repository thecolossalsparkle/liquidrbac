import React from 'react';
import { Box, Grid } from '@mui/material';
import FinancialSnapshot from '../../components/KPIs/FinancialSnapshot';
import NavigationTabs from '../../components/Navigation/NavigationTabs';
import PayableAgingChart from '../../components/Charts/PayableAgingChart';
import TopVendorsTable from '../../components/Tables/TopVendorsTable';
import VendorPaymentDistributionChart from '../../components/Charts/VendorPaymentDistributionChart';
import VendorComparisonChart from '../../components/Charts/VendorComparisonChart';

const VendorAnalysis = ({ 
  kpiData, 
  payableAgingData, 
  topVendorsData, 
  distributionData, 
  comparisonData,
  currentTab,
  onTabChange 
}) => {
  return (
    <Box>
      <FinancialSnapshot data={kpiData} />
      <Box sx={{ mt: 3 }}>
        <NavigationTabs currentTab={currentTab} onTabChange={onTabChange} />
      </Box>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopVendorsTable data={topVendorsData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <PayableAgingChart data={payableAgingData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <VendorPaymentDistributionChart data={distributionData} />
        </Grid>
        <Grid item xs={12}>
          <VendorComparisonChart data={comparisonData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default VendorAnalysis; 