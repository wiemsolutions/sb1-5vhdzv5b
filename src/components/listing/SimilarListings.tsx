import { FeaturedListing } from '../../data/featuredListings';
import ListingCarousel from '../featured/ListingCarousel';
import { isSimilarListing } from '../../utils/priceUtils';

interface SimilarListingsProps {
  currentListing: FeaturedListing;
  allListings: FeaturedListing[];
}

export default function SimilarListings({ currentListing, allListings }: SimilarListingsProps) {
  if (!currentListing || !allListings?.length) return null;

  // Filter similar listings based on category or price range
  const similarListings = allListings
    .filter(listing => isSimilarListing(currentListing, listing))
    .slice(0, 6);

  if (similarListings.length === 0) {
    return null;
  }

  return (
    <div className="border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Podobne oferty
        </h2>
        <ListingCarousel listings={similarListings} />
      </div>
    </div>
  );
}