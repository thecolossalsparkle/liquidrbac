import React from 'react';
import { Box, Grid } from '@mui/material';
import FinancialSnapshot from '../../components/KPIs/FinancialSnapshot';
import NavigationTabs from '../../components/Navigation/NavigationTabs';
import BudgetAnalysisChart from '../../components/Charts/BudgetAnalysisChart';
import ProjectedPayablesChart from '../../components/Charts/ProjectedPayablesChart';

const PredictiveAnalysis = ({ 
  kpiData, 
  budgetData,
  projectedPayablesData,
  currentTab,
  onTabChange 
}) => {
  return (
    <Box>
      <FinancialSnapshot data={kpiData} />
      <Box sx={{ mt: 3 }}>
        <NavigationTabs currentTab={currentTab} onTabChange={onTabChange} />
      </Box>
      
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={6}>
          <ProjectedPayablesChart data={projectedPayablesData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <BudgetAnalysisChart data={budgetData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PredictiveAnalysis; 