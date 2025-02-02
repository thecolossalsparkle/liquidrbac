import React from 'react';
import { Box, Grid } from '@mui/material';
import DashboardKPIs from '../../components/KPIs/DashboardKPIs';
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
      <DashboardKPIs 
        data={kpiData} 
        currentTab={currentTab}
        onTabChange={onTabChange}
      />
      
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