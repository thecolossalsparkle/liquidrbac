import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import { 
  HomeIcon, 
  UsersIcon, 
  DocumentTextIcon,
  CalendarIcon,
  CashIcon,
  CogIcon,
  ClipboardListIcon,
  ViewGridIcon,
  UserCircleIcon
} from '@heroicons/react/outline';
import newLogo from '../../assets/images/LiquidMind-Logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
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
    <nav className="bg-black text-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Mobile: Hamburger Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Logo - with more left padding */}
          <div className="flex-shrink-0 flex items-center lg:w-48 pl-12">
            <Link 
              to="/" 
              className="flex items-center"
            >
              <img
                src={newLogo}
                alt="LiquidMind"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - with more spacing */}
          <div className="hidden lg:flex lg:items-center lg:justify-center flex-1 px-6">
            <div className="flex space-x-6">
              {navItems.map(({ path, label, icon: Icon }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) => `
                    flex items-center px-4 py-2 rounded-md text-xs font-medium transition-colors
                    ${isActive 
                      ? 'bg-gray-900 text-white' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }
                  `}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* User Menu - with more padding */}
          <div className="flex-shrink-0 flex items-center space-x-3 text-gray-300 hover:text-white cursor-pointer px-4">
            <UserCircleIcon className="h-7 w-7" />
            <span className="hidden sm:inline text-sm font-medium pr-2">User Name</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </nav>
  );
};

export default Navbar; 