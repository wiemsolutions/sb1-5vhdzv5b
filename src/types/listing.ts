// Add to existing types
export interface ListingStatus {
  isFeatured: boolean;
  featuredUntil: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ListingFormData {
  // ... existing fields ...
  status: ListingStatus;
}

export const initialListingFormData: ListingFormData = {
  // ... existing fields ...
  status: {
    isFeatured: false,
    featuredUntil: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
};