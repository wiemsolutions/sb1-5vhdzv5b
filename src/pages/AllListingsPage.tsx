import { useState, useMemo, useEffect } from 'react';
import { ArrowUpDown } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { featuredListings } from '../data/featuredListings';
import ListingGrid from '../components/featured/ListingGrid';
import ListingFilters from '../components/filters/ListingFilters';
import { useListingFilters } from '../hooks/useListingFilters';
import { extractNumericPrice } from '../utils/priceUtils';

type SortOption = 'date-desc' | 'date-asc' | 'price-asc' | 'price-desc' | 'revenue-desc';

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'date-desc', label: 'Data dodania: najnowsze' },
  { value: 'date-asc', label: 'Data dodania: najstarsze' },
  { value: 'price-asc', label: 'Cena: od najniższej' },
  { value: 'price-desc', label: 'Cena: od najwyższej' },
  { value: 'revenue-desc', label: 'Przychód: od najwyższego' },
];

export default function AllListingsPage() {
  const [searchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState<SortOption>('date-desc');
  const { filters, setFilters, filteredListings } = useListingFilters(featuredListings);

  // Apply URL search params to filters
  useEffect(() => {
    const category = searchParams.get('category');
    const location = searchParams.get('location');
    
    if (category || location) {
      setFilters(prev => ({
        ...prev,
        category: category || '',
        location: location || ''
      }));
    }
  }, [searchParams, setFilters]);

  const sortedListings = useMemo(() => {
    const listings = [...filteredListings];
    
    switch (sortBy) {
      case 'date-desc':
        return listings.sort((a, b) => 
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
      case 'date-asc':
        return listings.sort((a, b) => 
          new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime());
      case 'price-asc':
        return listings.sort((a, b) => 
          extractNumericPrice(a.price) - extractNumericPrice(b.price));
      case 'price-desc':
        return listings.sort((a, b) => 
          extractNumericPrice(b.price) - extractNumericPrice(a.price));
      case 'revenue-desc':
        return listings.sort((a, b) => 
          extractNumericPrice(b.monthlyRevenue) - extractNumericPrice(a.monthlyRevenue));
      default:
        return listings;
    }
  }, [filteredListings, sortBy]);

  return (
    <div className="pt-16">
      {/* Search Section */}
      <div className="bg-gradient-to-r from-sea-600 to-sea-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-white mb-8 text-center">
            Wszystkie firmy na sprzedaż
          </h1>
          <ListingFilters onFilterChange={setFilters} />
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Sort Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="text-gray-600">
            Znaleziono {sortedListings.length} ofert
          </div>
          <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-sm">
            <ArrowUpDown className="w-4 h-4 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="border-0 bg-transparent text-gray-700 font-medium focus:ring-0 cursor-pointer pr-8"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Listings Grid */}
        <ListingGrid listings={sortedListings} />
      </div>
    </div>
  );
}