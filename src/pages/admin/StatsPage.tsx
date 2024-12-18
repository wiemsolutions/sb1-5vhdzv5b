import { useState } from 'react';
import { 
  BarChart as BarChartIcon, 
  TrendingUp, 
  Users, 
  DollarSign,
  Calendar
} from 'lucide-react';

export default function StatsPage() {
  const [dateRange, setDateRange] = useState('month');

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Statystyki</h1>
        <div className="flex items-center space-x-4">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
          >
            <option value="day">Dzisiaj</option>
            <option value="week">Ostatni tydzień</option>
            <option value="month">Ostatni miesiąc</option>
            <option value="year">Ostatni rok</option>
          </select>
          <button className="flex items-center px-4 py-2 bg-sea-600 text-white rounded-lg hover:bg-sea-700">
            <Calendar className="w-5 h-5 mr-2" />
            Wybierz zakres
          </button>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Przychody</h3>
            <DollarSign className="w-5 h-5 text-sea-600" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg">
            {/* Add revenue chart here */}
          </div>
        </div>

        {/* Users Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Użytkownicy</h3>
            <Users className="w-5 h-5 text-sea-600" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg">
            {/* Add users chart here */}
          </div>
        </div>

        {/* Listings by Category */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Ogłoszenia wg kategorii</h3>
            <BarChartIcon className="w-5 h-5 text-sea-600" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg">
            {/* Add category chart here */}
          </div>
        </div>

        {/* Growth Rate */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Wskaźnik wzrostu</h3>
            <TrendingUp className="w-5 h-5 text-sea-600" />
          </div>
          <div className="h-64 bg-gray-50 rounded-lg">
            {/* Add growth chart here */}
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Kluczowe metryki</h3>
        <div className="grid grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-500">Współczynnik konwersji</p>
            <p className="text-2xl font-semibold text-gray-900">2.4%</p>
            <p className="text-sm text-green-600">+0.3% vs poprzedni okres</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Średni czas na stronie</p>
            <p className="text-2xl font-semibold text-gray-900">4m 32s</p>
            <p className="text-sm text-red-600">-12s vs poprzedni okres</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Współczynnik odrzuceń</p>
            <p className="text-2xl font-semibold text-gray-900">42%</p>
            <p className="text-sm text-green-600">-5% vs poprzedni okres</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Aktywni użytkownicy</p>
            <p className="text-2xl font-semibold text-gray-900">1,234</p>
            <p className="text-sm text-green-600">+12% vs poprzedni okres</p>
          </div>
        </div>
      </div>
    </div>
  );
}