import React from 'react';
import StatCard from '../components/common/StatCard';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { 
  UserIcon, 
  DocumentIcon, 
  ClockIcon, 
  ExclamationIcon,
  CurrencyDollarIcon
} from '@heroicons/react/outline';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <div className="space-x-3">
          <Button>Manage Users</Button>
          <Button>View Audit Logs</Button>
          <Button>Download Reports</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Active Users"
          value="1"
          icon={<UserIcon className="w-5 h-5" />}
        />
        <StatCard
          title="Total Invoices"
          value="0"
          icon={<DocumentIcon className="w-5 h-5" />}
        />
        <StatCard
          title="Pending Approvals"
          value="0"
          icon={<ClockIcon className="w-5 h-5" />}
          variant="warning"
        />
        <StatCard
          title="Rejected Invoices"
          value="0"
          icon={<ExclamationIcon className="w-5 h-5" />}
          variant="danger"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatCard
          title="Overdue Invoices"
          value="0"
          icon={<ClockIcon className="w-5 h-5" />}
          variant="danger"
        />
        <StatCard
          title="High-Value Transactions"
          value="0"
          icon={<CurrencyDollarIcon className="w-5 h-5" />}
          variant="success"
        />
      </div>

      <Card>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="text-gray-500">No recent activity</div>
      </Card>
    </div>
  );
};

export default Dashboard; 