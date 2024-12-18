import { FeaturedListing } from '../../data/featuredListings';
import ListingCard from './ListingCard';

interface ListingGridProps {
  listings: FeaturedListing[];
}

export default function ListingGrid({ listings }: ListingGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
      {listings.map((listing, index) => (
        <ListingCard key={index} listing={listing} />
      ))}
    </div>
  );
}