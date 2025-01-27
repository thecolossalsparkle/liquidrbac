import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import ManagerDashboard from './pages/Dashboard/ManagerDashboard';
import AccountantDashboard from './pages/Dashboard/AccountantDashboard';
import OperatorDashboard from './pages/Dashboard/OperatorDashboard';
import AuditorDashboard from './pages/Dashboard/AuditorDashboard';
import Users from './pages/Users';
import Invoices from './pages/Invoices';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import AuditLogs from './pages/AuditLogs';
import Installments from './pages/Installments';
import ERPSetup from './pages/ERPSetup';
import './App.css';

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard">
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="manager" element={<ManagerDashboard />} />
            <Route path="accountant" element={<AccountantDashboard />} />
            <Route path="operator" element={<OperatorDashboard />} />
            <Route path="auditor" element={<AuditorDashboard />} />
            {/* Default to admin dashboard if no specific role is selected */}
            <Route index element={<AdminDashboard />} />
          </Route>
          <Route path="/users" element={<Users />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/installments" element={<Installments />} />
          <Route path="/audit-logs" element={<AuditLogs />} />
          <Route path="/erp-setup" element={<ERPSetup />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
