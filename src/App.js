import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import Dashboard from './pages/Dashboard';
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
          <Route path="/dashboard" element={<Dashboard />} />
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
