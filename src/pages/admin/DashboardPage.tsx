import { useState } from 'react';
import { 
  Building2, 
  Users, 
  CreditCard, 
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

export default function DashboardPage() {
  const [stats] = useState([
    {
      name: 'Aktywne ogłoszenia',
      value: '245',
      change: '+12.5%',
      increasing: true,
      icon: Building2
    },
    {
      name: 'Użytkownicy',
      value: '1,890',
      change: '+15.3%',
      increasing: true,
      icon: Users
    },
    {
      name: 'Aktywne subskrypcje',
      value: '156',
      change: '-2.4%',
      increasing: false,
      icon: CreditCard
    },
    {
      name: 'Przychód miesięczny',
      value: '12,450 zł',
      change: '+8.2%',
      increasing: true,
      icon: TrendingUp
    }
  ]);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.name}
              className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 rounded-lg overflow-hidden shadow"
            >
              <dt>
                <div className="absolute bg-sea-50 rounded-md p-3">
                  <Icon className="h-6 w-6 text-sea-600" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.increasing ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {stat.increasing ? (
                    <ArrowUpRight className="h-4 w-4 flex-shrink-0" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 flex-shrink-0" />
                  )}
                  <span className="sr-only">
                    {stat.increasing ? 'Increased' : 'Decreased'} by
                  </span>
                  {stat.change}
                </p>
              </dd>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Ostatnia aktywność</h2>
        <div className="mt-4 bg-white shadow rounded-lg divide-y divide-gray-200">
          {/* Add activity items here */}
        </div>
      </div>
    </div>
  );
}