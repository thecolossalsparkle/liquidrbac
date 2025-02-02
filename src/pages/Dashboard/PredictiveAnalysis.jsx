import React from 'react';
import { Box } from '@mui/material';
import FinancialSnapshot from '../../components/KPIs/FinancialSnapshot';
import NavigationTabs from '../../components/Navigation/NavigationTabs';
import BudgetAnalysisChart from '../../components/Charts/BudgetAnalysisChart';

const PredictiveAnalysis = ({ 
  kpiData, 
  budgetData,
  currentTab,
  onTabChange 
}) => {
  return (
    <Box>
      <FinancialSnapshot data={kpiData} />
      <Box sx={{ mt: 3 }}>
        <NavigationTabs currentTab={currentTab} onTabChange={onTabChange} />
      </Box>
      
      <Box sx={{ mt: 3 }}>
        <BudgetAnalysisChart data={budgetData} />
      </Box>
    </Box>
  );
};

export default PredictiveAnalysis; 