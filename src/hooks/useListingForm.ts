import { useState } from 'react';
import { ListingFormData, initialListingFormData } from '../types/listing';

export function useListingForm() {
  const [formData, setFormData] = useState<ListingFormData>(initialListingFormData);

  const updateFormData = (data: Partial<ListingFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.title && formData.category && formData.description && 
                 formData.location && formData.established && formData.employees);
      case 2:
        return !!(formData.price && formData.monthlyRevenue && formData.yearlyProfit);
      case 3:
        return formData.assets.length > 0 && !!formData.transitionPeriod;
      case 4:
        return !!(formData.contactName && formData.contactEmail && formData.contactPhone);
      default:
        return false;
    }
  };

  const resetForm = () => {
    setFormData(initialListingFormData);
  };

  return {
    formData,
    updateFormData,
    validateStep,
    resetForm
  };
}