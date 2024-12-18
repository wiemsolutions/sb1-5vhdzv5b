export function isFeaturedActive(featuredUntil: string | null): boolean {
  if (!featuredUntil) return false;
  const now = new Date();
  const expiryDate = new Date(featuredUntil);
  return now < expiryDate;
}

export function getFeaturedExpiryDate(): string {
  const date = new Date();
  date.setDate(date.getDate() + 7); // Add 7 days
  return date.toISOString();
}

export function sortListingsByFeatured(listings: any[]): any[] {
  return [...listings].sort((a, b) => {
    // First sort by featured status
    if (a.isFeatured && !b.isFeatured) return -1;
    if (!a.isFeatured && b.isFeatured) return 1;
    
    // If both are featured or both are not featured, sort by date
    return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
  });
}