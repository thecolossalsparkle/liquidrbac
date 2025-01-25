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
  UserCircleIcon,
  LogoutIcon
} from '@heroicons/react/outline';
import newLogo from '../../assets/images/LiquidMind-Logo.png';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Add mock user data (replace with actual user data from your auth system)
  const userData = {
    name: "John Doe",
    phone: "+1 (555) 123-4567",
    email: "john.doe@example.com",
    role: "Administrator"
  };

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

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 relative">
          {/* Mobile: Hamburger Button */}
          <div className="flex-shrink-0 lg:hidden">
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

          {/* Logo - centered on mobile */}
          <div className="flex-1 flex justify-center lg:justify-start lg:w-48">
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

          {/* Desktop Navigation */}
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

          {/* User Menu */}
          <div className="flex-shrink-0 flex items-center">
            <Menu as="div" className="relative z-50">
              <Menu.Button className="flex items-center space-x-2 text-gray-300 hover:text-white cursor-pointer px-2">
                <UserCircleIcon className="h-7 w-7" />
                <span className="hidden sm:inline text-sm font-medium">{userData.name}</span>
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="px-4 py-3">
                    <div className="text-sm text-gray-900 font-medium border-b pb-2 mb-2">
                      {userData.name}
                    </div>
                    <div className="text-sm text-gray-700 py-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Phone:</span>
                        <span>{userData.phone}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-700 py-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Email:</span>
                        <span>{userData.email}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-700 py-1">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">Role:</span>
                        <span>{userData.role}</span>
                      </div>
                    </div>
                    <div className="border-t mt-2 pt-2">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left flex items-center space-x-2 px-1 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                      >
                        <LogoutIcon className="h-5 w-5" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
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