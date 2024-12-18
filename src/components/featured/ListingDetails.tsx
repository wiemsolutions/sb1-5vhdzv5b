import { MapPin, Users, Calendar, TrendingUp } from 'lucide-react';
import { FeaturedListing } from '../../data/featuredListings';

interface ListingDetailsProps {
  listing: FeaturedListing;
}

export default function ListingDetails({ listing }: ListingDetailsProps) {
  return (
    <div className="grid grid-cols-2 gap-2 mb-3 text-xs md:text-sm md:gap-3 md:mb-4">
      <div className="flex items-center text-gray-600">
        <MapPin className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 md:w-4 md:h-4 md:mr-2" />
        <span className="truncate">{listing.location}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Users className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 md:w-4 md:h-4 md:mr-2" />
        <span className="truncate">{listing.employees} pracowników</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Calendar className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 md:w-4 md:h-4 md:mr-2" />
        <span className="truncate">Od {listing.established} roku</span>
      </div>
      <div className="flex items-center text-gray-600">
        <TrendingUp className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 md:w-4 md:h-4 md:mr-2" />
        <span className="truncate">{listing.monthlyRevenue}/mies.</span>
      </div>
    </div>
  );
}