import React from 'react';
import { Box } from '@mui/material';
import DashboardKPIs from '../../components/KPIs/DashboardKPIs';
import BudgetAnalysisChart from '../../components/Charts/BudgetAnalysisChart';

const PredictiveAnalysis = ({ 
  kpiData, 
  budgetData,
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
      
      <Box sx={{ mt: 3 }}>
        <BudgetAnalysisChart data={budgetData} />
      </Box>
    </Box>
  );
};

export default PredictiveAnalysis; 