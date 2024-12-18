import { useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { Search, Download, UserPlus, Shield } from 'lucide-react';

export default function UsersPage() {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const { data: users, loading } = useApi(() => []); // Replace with actual API call

  const exportUsers = () => {
    const csv = users.map(user => 
      Object.values(user).join(',')
    ).join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    a.click();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Użytkownicy</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={exportUsers}
            className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Download className="w-5 h-5 mr-2" />
            Eksportuj
          </button>
          <button className="flex items-center px-4 py-2 bg-sea-600 text-white rounded-lg hover:bg-sea-700">
            <UserPlus className="w-5 h-5 mr-2" />
            Dodaj użytkownika
          </button>
        </div>
      </div>

      {/* Role Management */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Role i uprawnienia</h2>
        <div className="grid grid-cols-3 gap-6">
          {['Admin', 'Moderator', 'User'].map((role) => (
            <div key={role} className="border rounded-lg p-4">
              <div className="flex items-center mb-4">
                <Shield className="w-5 h-5 text-sea-600 mr-2" />
                <h3 className="font-medium">{role}</h3>
              </div>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-sea-600 mr-2" />
                  <span className="text-sm">Zarządzanie ogłoszeniami</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-sea-600 mr-2" />
                  <span className="text-sm">Zarządzanie użytkownikami</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-sea-600 mr-2" />
                  <span className="text-sm">Zarządzanie subskrypcjami</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white shadow rounded-lg">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Szukaj użytkowników..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
            />
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Użytkownik
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rola
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ostatnie logowanie
              </th>
              <th className="relative px-6 py-3">
                <span className="sr-only">Akcje</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Add user rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}