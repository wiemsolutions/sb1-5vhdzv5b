import { FeaturedListing } from '../../data/featuredListings';
import ListingGrid from './ListingGrid';
import ListingCarousel from './ListingCarousel';

interface FeaturedListProps {
  listings: FeaturedListing[];
}

export default function FeaturedList({ listings }: FeaturedListProps) {
  return (
    <div className="py-4">
      <div className="md:hidden">
        <ListingCarousel listings={listings} />
      </div>
      <div className="hidden md:block">
        <ListingGrid listings={listings} />
      </div>
    </div>
  );
}