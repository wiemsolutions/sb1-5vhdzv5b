import { useState, useEffect } from 'react';
import { isFeaturedActive, getFeaturedExpiryDate } from '../utils/listingUtils';
import { ListingStatus } from '../types/listing';

export function useListingStatus(initialStatus: ListingStatus) {
  const [status, setStatus] = useState(initialStatus);

  useEffect(() => {
    // Check if featured status has expired
    if (status.isFeatured && status.featuredUntil) {
      const isActive = isFeaturedActive(status.featuredUntil);
      
      if (!isActive && status.isFeatured) {
        // Featured period has expired, update status
        setStatus(prev => ({
          ...prev,
          isFeatured: false,
          featuredUntil: null,
          updatedAt: new Date().toISOString()
        }));
      }
    }
  }, [status.isFeatured, status.featuredUntil]);

  const activateFeatured = () => {
    setStatus(prev => ({
      ...prev,
      isFeatured: true,
      featuredUntil: getFeaturedExpiryDate(),
      updatedAt: new Date().toISOString()
    }));
  };

  const deactivateFeatured = () => {
    setStatus(prev => ({
      ...prev,
      isFeatured: false,
      featuredUntil: null,
      updatedAt: new Date().toISOString()
    }));
  };

  return {
    status,
    activateFeatured,
    deactivateFeatured,
    isActive: status.isFeatured && isFeaturedActive(status.featuredUntil)
  };
}