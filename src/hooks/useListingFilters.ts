import { useState, useCallback, useMemo } from 'react';
import { FeaturedListing } from '../data/featuredListings';
import { extractNumericPrice } from '../utils/priceUtils';

interface Filters {
  search: string;
  priceMin: string;
  priceMax: string;
  category: string;
  location: string;
  employeesMin: string;
  employeesMax: string;
  revenueMin: string;
  revenueMax: string;
  profitMin: string;
  profitMax: string;
  establishedFrom: string;
  establishedTo: string;
  realEstate: string;
  dateAdded: string;
  isFeatured: boolean;
}

export function useListingFilters(listings: FeaturedListing[]) {
  const [filters, setFilters] = useState<Filters>({
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

  const applyFilters = useCallback((listing: FeaturedListing): boolean => {
    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const searchMatch = 
        listing.title.toLowerCase().includes(searchTerm) ||
        listing.description.toLowerCase().includes(searchTerm) ||
        listing.location.toLowerCase().includes(searchTerm) ||
        listing.category.toLowerCase().includes(searchTerm);
      if (!searchMatch) return false;
    }

    // Category filter
    if (filters.category && listing.category !== filters.category) {
      return false;
    }

    // Location filter
    if (filters.location && !listing.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }

    // Price range filter
    const price = extractNumericPrice(listing.price);
    if (filters.priceMin && price < parseInt(filters.priceMin)) {
      return false;
    }
    if (filters.priceMax && price > parseInt(filters.priceMax)) {
      return false;
    }

    // Revenue range filter
    const revenue = extractNumericPrice(listing.monthlyRevenue);
    if (filters.revenueMin && revenue < parseInt(filters.revenueMin)) {
      return false;
    }
    if (filters.revenueMax && revenue > parseInt(filters.revenueMax)) {
      return false;
    }

    // Employees range filter
    if (filters.employeesMin && listing.employees < parseInt(filters.employeesMin)) {
      return false;
    }
    if (filters.employeesMax && listing.employees > parseInt(filters.employeesMax)) {
      return false;
    }

    // Established year range filter
    if (filters.establishedFrom && listing.established < parseInt(filters.establishedFrom)) {
      return false;
    }
    if (filters.establishedTo && listing.established > parseInt(filters.establishedTo)) {
      return false;
    }

    // Date added filter
    if (filters.dateAdded) {
      const listingDate = new Date(listing.dateAdded);
      const now = new Date();
      const daysDiff = Math.floor((now.getTime() - listingDate.getTime()) / (1000 * 60 * 60 * 24));

      switch (filters.dateAdded) {
        case 'today':
          if (daysDiff > 1) return false;
          break;
        case 'week':
          if (daysDiff > 7) return false;
          break;
        case 'month':
          if (daysDiff > 30) return false;
          break;
        case 'quarter':
          if (daysDiff > 90) return false;
          break;
      }
    }

    // Featured filter
    if (filters.isFeatured && !listing.isFeatured) {
      return false;
    }

    return true;
  }, [filters]);

  const filteredListings = useMemo(() => {
    return listings.filter(applyFilters);
  }, [listings, applyFilters]);

  return {
    filters,
    setFilters,
    filteredListings
  };
}