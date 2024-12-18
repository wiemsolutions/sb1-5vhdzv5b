import { ArrowRight, MapPin, Users, Calendar, TrendingUp } from 'lucide-react';
import { FeaturedListing } from '../../data/featuredListings';

interface FeaturedCardProps {
  listing: FeaturedListing;
}

export default function FeaturedCard({ listing }: FeaturedCardProps) {
  return (
    <div className="w-full max-w-[400px] md:max-w-none bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-48 md:h-56">
        <img 
          src={listing.image} 
          alt={listing.title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4 bg-sea-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {listing.category}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 md:p-6 flex flex-col h-[calc(100%-192px)] md:h-[calc(100%-224px)]">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[56px]">
          {listing.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-2 flex-grow">
          {listing.description}
        </p>

        {/* Key Details Grid */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">{listing.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">{listing.employees} pracowników</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">Od {listing.established} roku</span>
          </div>
          <div className="flex items-center text-gray-600">
            <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">{listing.monthlyRevenue}/mies.</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
          <div className="text-sea-600 font-bold text-xl">
            {listing.price}
          </div>
          <button className="inline-flex items-center px-4 py-2 bg-sea-50 text-sea-600 rounded-lg font-semibold hover:bg-sea-100 transition-colors">
            Zobacz szczegóły
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}