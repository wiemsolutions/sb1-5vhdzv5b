import { TrendingUp, Users, Building2, DollarSign } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Building2, label: 'Aktywne oferty', value: '75,000+' },
    { icon: Users, label: 'Miesięczni użytkownicy', value: '2M+' },
    { icon: TrendingUp, label: 'Udane transakcje', value: '150,000+' },
    { icon: DollarSign, label: 'Całkowita wartość', value: '$25B+' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sea-100 mb-4">
              <Icon className="w-6 h-6 text-sea-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}