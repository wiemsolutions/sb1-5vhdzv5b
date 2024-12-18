import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  CreditCard,
  Settings,
  Flag,
  BarChart
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Ogłoszenia', href: '/admin/listings', icon: Building2 },
  { name: 'Użytkownicy', href: '/admin/users', icon: Users },
  { name: 'Subskrypcje', href: '/admin/subscriptions', icon: CreditCard },
  { name: 'Zgłoszenia', href: '/admin/reports', icon: Flag },
  { name: 'Statystyki', href: '/admin/stats', icon: BarChart },
  { name: 'Ustawienia', href: '/admin/settings', icon: Settings },
];

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-white shadow-sm min-h-screen">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                    isActive
                      ? 'bg-sea-50 text-sea-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <Icon className="mr-3 h-6 w-6 flex-shrink-0" />
                {item.name}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
}