import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  UsersIcon, 
  DocumentTextIcon,
  CalendarIcon,
  CashIcon,
  CogIcon,
  ClipboardListIcon,
  ViewGridIcon,
} from '@heroicons/react/outline';
import newLogo from '../../assets/images/LiquidMind-Logo.png';

const MobileMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { path: '/', label: 'HOME', icon: HomeIcon },
    { path: '/dashboard', label: 'DASHBOARD', icon: ViewGridIcon },
    { path: '/users', label: 'USERS', icon: UsersIcon },
    { path: '/invoices', label: 'INVOICES', icon: DocumentTextIcon },
    { path: '/calendar', label: 'CALENDAR', icon: CalendarIcon },
    { path: '/installments', label: 'INSTALLMENTS', icon: CashIcon },
    { path: '/erp-setup', label: 'ERP SETUP', icon: CogIcon },
    { path: '/audit-logs', label: 'AUDIT LOGS', icon: ClipboardListIcon },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-75 transition-opacity z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-black transform transition-transform z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex-1 flex justify-center">
              <img 
                src={newLogo}
                alt="LiquidMind" 
                className="h-8"
              />
            </div>
            <button 
              onClick={onClose}
              className="absolute right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-black"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
        </div>

        <nav className="px-2 py-4">
          <ul className="space-y-1">
            {menuItems.map(({ path, label, icon: Icon }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={onClose}
                  className={({ isActive }) => `
                    flex items-center px-4 py-2 rounded-lg transition-colors
                    ${isActive 
                      ? 'bg-black text-white' 
                      : 'text-gray-300 hover:bg-black hover:text-white'
                    }
                  `}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu; 