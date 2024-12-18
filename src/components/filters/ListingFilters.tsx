import { useState } from 'react';
import { Search, X, Filter, ChevronDown } from 'lucide-react';
import { industries } from '../../data/industries';

interface ListingFiltersProps {
  onFilterChange: (filters: any) => void;
}

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 30 }, (_, i) => currentYear - i);

export default function ListingFilters({ onFilterChange }: ListingFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: '',
    priceMin: '',
    priceMax: '',
    category: '',
    location: '',
    employeesMin: '',
    employeesMax: '',
    revenueMin: '',
    revenueMax: '',
    profitMin: '',
    profitMax: '',
    establishedFrom: '',
    establishedTo: '',
    realEstate: '',
    dateAdded: '',
    isFeatured: false
  });

  const handleFilterChange = (key: string, value: string | boolean) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = Object.keys(filters).reduce((acc, key) => ({
      ...acc,
      [key]: typeof filters[key] === 'boolean' ? false : ''
    }), {});
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Szukaj po nazwie, lokalizacji lub opisie..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
          />
        </div>
      </div>

      {/* Mobile Filter Toggle */}
      <div className="p-4 border-t md:hidden">
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className="w-full flex items-center justify-between px-4 py-2 bg-gray-50 rounded-lg text-gray-700"
        >
          <div className="flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            <span>Filtry zaawansowane</span>
          </div>
          <ChevronDown className={`w-5 h-5 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Filters Content */}
      <div className={`border-t ${isFiltersOpen ? 'block' : 'hidden md:block'}`}>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Basic Filters */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kategoria
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
            >
              <option value="">Wszystkie kategorie</option>
              {industries.map((industry) => (
                <option key={industry.id} value={industry.name}>
                  {industry.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lokalizacja
            </label>
            <input
              type="text"
              placeholder="Miasto lub region"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
            />
          </div>

          {/* Financial Filters */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Cena (PLN)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Od"
                value={filters.priceMin}
                onChange={(e) => handleFilterChange('priceMin', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
              />
              <input
                type="number"
                placeholder="Do"
                value={filters.priceMax}
                onChange={(e) => handleFilterChange('priceMax', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Przychód miesięczny (PLN)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Od"
                value={filters.revenueMin}
                onChange={(e) => handleFilterChange('revenueMin', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
              />
              <input
                type="number"
                placeholder="Do"
                value={filters.revenueMax}
                onChange={(e) => handleFilterChange('revenueMax', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Zysk roczny (PLN)
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Od"
                value={filters.profitMin}
                onChange={(e) => handleFilterChange('profitMin', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
              />
              <input
                type="number"
                placeholder="Do"
                value={filters.profitMax}
                onChange={(e) => handleFilterChange('profitMax', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
              />
            </div>
          </div>

          {/* Business Details Filters */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Liczba pracowników
            </label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                placeholder="Od"
                value={filters.employeesMin}
                onChange={(e) => handleFilterChange('employeesMin', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
              />
              <input
                type="number"
                placeholder="Do"
                value={filters.employeesMax}
                onChange={(e) => handleFilterChange('employeesMax', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Rok założenia
            </label>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={filters.establishedFrom}
                onChange={(e) => handleFilterChange('establishedFrom', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
              >
                <option value="">Od roku</option>
                {yearOptions.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
              <select
                value={filters.establishedTo}
                onChange={(e) => handleFilterChange('establishedTo', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
              >
                <option value="">Do roku</option>
                {yearOptions.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status nieruchomości
            </label>
            <select
              value={filters.realEstate}
              onChange={(e) => handleFilterChange('realEstate', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
            >
              <option value="">Wszystkie</option>
              <option value="lease">Wynajem</option>
              <option value="owned">Własność</option>
              <option value="optional">Opcjonalny zakup</option>
            </select>
          </div>

          {/* Additional Filters */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Data dodania
            </label>
            <select
              value={filters.dateAdded}
              onChange={(e) => handleFilterChange('dateAdded', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-sea-500 focus:border-sea-500"
            >
              <option value="">Wszystkie</option>
              <option value="today">Dzisiaj</option>
              <option value="week">Ostatni tydzień</option>
              <option value="month">Ostatni miesiąc</option>
              <option value="quarter">Ostatnie 3 miesiące</option>
            </select>
          </div>

          <div className="flex items-center">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.isFeatured}
                onChange={(e) => handleFilterChange('isFeatured', e.target.checked)}
                className="rounded border-gray-300 text-sea-600 focus:ring-sea-500"
              />
              <span className="text-sm text-gray-700">Tylko wyróżnione oferty</span>
            </label>
          </div>
        </div>

        {/* Clear Filters */}
        <div className="p-4 border-t flex justify-end">
          <button
            onClick={clearFilters}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-sea-600"
          >
            <X className="w-4 h-4 mr-2" />
            Wyczyść filtry
          </button>
        </div>
      </div>
    </div>
  );
}