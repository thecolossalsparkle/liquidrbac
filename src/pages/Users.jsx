import React, { useState } from 'react';
import SearchInput from '../components/common/SearchInput';
import Card from '../components/common/Card';
import ThresholdSettingsModal from '../components/modals/ThresholdSettingsModal';
import BulkUploadModal from '../components/modals/BulkUploadModal';
import { CogIcon, UploadIcon, ChevronDownIcon } from '@heroicons/react/outline';
import TablePagination from '../components/common/TablePagination';

const ROLES = ['All Roles', 'Accountant', 'Manager', 'Auditor', 'Operator', 'Not Assigned'];
const STATUS = ['All Status', 'Active', 'Inactive'];

function Users() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [isThresholdModalOpen, setIsThresholdModalOpen] = useState(false);
  const [isBulkUploadModalOpen, setIsBulkUploadModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Updated mock data
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Manager',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'Accountant',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      email: 'robert.j@example.com',
      role: 'Auditor',
      status: 'Inactive'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.w@example.com',
      role: 'Operator',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Michael Brown',
      email: 'michael.b@example.com',
      role: 'Not Assigned',
      status: 'Inactive'
    },
    {
      id: 6,
      name: 'Emily Davis',
      email: 'emily.d@example.com',
      role: 'Manager',
      status: 'Active'
    }
  ]);

  // Filter users based on search and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'All Roles' || user.role === selectedRole;
    const matchesStatus = selectedStatus === 'All Status' || user.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // Calculate pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredUsers.slice(indexOfFirstEntry, indexOfLastEntry);

  const handleSave = (userId) => {
    setEditingUser(null);
    // Here you would typically make an API call to save the changes
    console.log('Saving changes for user:', userId);
  };

  const MobileUserCard = ({ user }) => (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="space-y-2.5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-sm font-medium text-gray-600">Name</div>
            <div className="text-base text-gray-900">{user.name}</div>
          </div>
          {editingUser === user.id ? (
            <div className="flex gap-2">
              <button
                onClick={() => handleSave(user.id)}
                className="text-xs bg-green-500 text-white px-2.5 py-1 rounded-md hover:bg-green-600 transition-colors duration-200"
              >
                Save
              </button>
              <button
                onClick={() => setEditingUser(null)}
                className="text-xs bg-gray-500 text-white px-2.5 py-1 rounded-md hover:bg-gray-600 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setEditingUser(user.id)}
              className="text-xs text-blue-600 hover:text-blue-800 px-2.5 py-1"
            >
              Edit
            </button>
          )}
        </div>

        <div>
          <div className="text-sm font-medium text-gray-600">Email</div>
          <div className="text-base text-gray-900">{user.email}</div>
        </div>

        <div>
          <div className="text-sm font-medium text-gray-600">Role</div>
          {editingUser === user.id ? (
            <select
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1 mt-1 text-base"
              value={user.role}
              onChange={(e) => {
                const updatedUsers = users.map(u => 
                  u.id === user.id ? { ...u, role: e.target.value } : u
                );
                setUsers(updatedUsers);
              }}
            >
              {ROLES.filter(role => role !== 'All Roles').map((role) => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          ) : (
            <div className="text-base text-gray-900">{user.role}</div>
          )}
        </div>

        <div>
          <div className="text-sm font-medium text-gray-600">Status</div>
          {editingUser === user.id ? (
            <select
              className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1 mt-1 text-base"
              value={user.status}
              onChange={(e) => {
                const updatedUsers = users.map(u => 
                  u.id === user.id ? { ...u, status: e.target.value } : u
                );
                setUsers(updatedUsers);
              }}
            >
              {STATUS.filter(status => status !== 'All Status').map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          ) : (
            <span className={`inline-block px-2 py-0.5 rounded-full text-xs ${
              user.status === 'Active' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {user.status}
            </span>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">User Management</h1>
        <div className="flex flex-row sm:flex-row w-full sm:w-auto gap-3">
          <button 
            onClick={() => setIsThresholdModalOpen(true)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-200 text-white shadow-sm flex-1 sm:w-auto sm:flex-initial"
          >
            <CogIcon className="w-5 h-5" />
            <span className="hidden sm:inline">Threshold Settings</span>
            <span className="sm:hidden">Threshold</span>
          </button>
          <button 
            onClick={() => setIsBulkUploadModalOpen(true)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-200 text-white shadow-sm flex-1 sm:w-auto sm:flex-initial"
          >
            <UploadIcon className="w-5 h-5" />
            <span className="hidden sm:inline">Bulk Upload</span>
            <span className="sm:hidden">Upload</span>
          </button>
        </div>
      </div>

      <Card>
        <div className="p-4">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <SearchInput
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full lg:flex-1"
            />
            {/* Mobile filters - stacked */}
            <div className="flex flex-col w-full gap-4 lg:hidden">
              <div className="relative w-full">
                <select
                  className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-10"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  {ROLES.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="relative w-full">
                <select
                  className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-10"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {STATUS.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
            {/* Desktop filters - side by side */}
            <div className="hidden lg:flex flex-row gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-40">
                <select
                  className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-10"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  {ROLES.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="relative flex-1 lg:w-40">
                <select
                  className="w-full appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2.5 pr-10"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  {STATUS.map((status) => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <ChevronDownIcon className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="block lg:hidden px-4 pb-4">
          {filteredUsers.length === 0 ? (
            <div className="text-center text-gray-500 py-4">
              No Users Found
            </div>
          ) : (
            currentEntries.map((user) => (
              <MobileUserCard key={user.id} user={user} />
            ))
          )}
        </div>

        {/* Desktop view */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Role</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                    No Users Found
                  </td>
                </tr>
              ) : (
                currentEntries.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">
                      {editingUser === user.id ? (
                        <select
                          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1"
                          value={user.role}
                          onChange={(e) => {
                            const updatedUsers = users.map(u => 
                              u.id === user.id ? { ...u, role: e.target.value } : u
                            );
                            setUsers(updatedUsers);
                          }}
                        >
                          {ROLES.filter(role => role !== 'All Roles').map((role) => (
                            <option key={role} value={role}>{role}</option>
                          ))}
                        </select>
                      ) : (
                        user.role
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {editingUser === user.id ? (
                        <select
                          className="w-full bg-white border border-gray-200 rounded-lg px-3 py-1"
                          value={user.status}
                          onChange={(e) => {
                            const updatedUsers = users.map(u => 
                              u.id === user.id ? { ...u, status: e.target.value } : u
                            );
                            setUsers(updatedUsers);
                          }}
                        >
                          {STATUS.filter(status => status !== 'All Status').map((status) => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                      ) : (
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          user.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {editingUser === user.id ? (
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleSave(user.id)}
                            className="text-sm bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors duration-200"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingUser(null)}
                            className="text-sm bg-gray-500 text-white px-3 py-1 rounded-md hover:bg-gray-600 transition-colors duration-200"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setEditingUser(user.id)}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          Edit
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <TablePagination
        totalEntries={filteredUsers.length}
        entriesPerPage={entriesPerPage}
        currentPage={currentPage}
        onEntriesPerPageChange={(value) => {
          setEntriesPerPage(value);
          setCurrentPage(1);
        }}
        onPageChange={setCurrentPage}
      />

      <ThresholdSettingsModal
        isOpen={isThresholdModalOpen}
        onClose={() => setIsThresholdModalOpen(false)}
        onSave={(data) => {
          console.log('Threshold settings:', data);
          // Handle saving threshold settings
        }}
      />

      <BulkUploadModal
        isOpen={isBulkUploadModalOpen}
        onClose={() => setIsBulkUploadModalOpen(false)}
        onUpload={(data) => {
          console.log('Upload data:', data);
          // Handle file upload
        }}
      />
    </div>
  );
}

export default Users; 