import { useState, useEffect } from 'react';
import { getListings, ListingData } from '../api/listings';
import { useApi } from './useApi';

export function useListings(initialFilters = {}) {
  const [filters, setFilters] = useState(initialFilters);
  const { data: listings, loading, error, execute } = useApi(getListings);

  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params.append(key, String(value));
    });
    execute(params);
  }, [filters, execute]);

  const updateFilters = (newFilters: Partial<typeof filters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return {
    listings,
    loading,
    error,
    filters,
    updateFilters,
  };
}