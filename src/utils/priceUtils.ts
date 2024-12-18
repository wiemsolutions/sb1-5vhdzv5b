import { FeaturedListing } from '../data/featuredListings';

export function extractNumericPrice(price: string): number {
  try {
    return parseInt(price.replace(/[^\d]/g, '')) || 0;
  } catch {
    return 0;
  }
}

export function getPriceRange(price: string): number {
  const numericPrice = extractNumericPrice(price);
  return Math.floor(numericPrice * 0.3);
}

export function isSimilarListing(
  currentListing: FeaturedListing,
  otherListing: FeaturedListing
): boolean {
  // Don't compare with self
  if (currentListing.id === otherListing.id) return false;

  // Same category is always similar
  if (currentListing.category === otherListing.category) return true;

  try {
    // Compare prices if both are valid
    const currentPrice = extractNumericPrice(currentListing.price);
    const otherPrice = extractNumericPrice(otherListing.price);
    const priceRange = getPriceRange(currentListing.price);

    return Math.abs(currentPrice - otherPrice) <= priceRange;
  } catch {
    // If price comparison fails, fall back to category only
    return false;
  }
}