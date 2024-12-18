import { useAuth } from '../../../contexts/AuthContext';
import { Bell, Settings } from 'lucide-react';

export default function AdminHeader() {
  const { user } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-semibold text-xl text-gray-900">
            Panel Administracyjny
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="w-6 h-6" />
            </button>
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-2">
                {user?.firstName} {user?.lastName}
              </span>
              <div className="w-8 h-8 rounded-full bg-sea-600 text-white flex items-center justify-center">
                {user?.firstName?.[0]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}