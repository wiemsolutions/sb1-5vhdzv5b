import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeaturedListing } from '../../data/featuredListings';
import ListingDetails from './ListingDetails';
import ListingImage from './ListingImage';
import CategoryIcon from '../categories/CategoryIcon';
import { industries } from '../../data/industries';

interface ListingCardProps {
  listing: FeaturedListing;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

export default function ListingCard({ listing }: ListingCardProps) {
  const category = industries.find(ind => ind.name === listing.category);
  const categoryIcon = category?.icon || 'building';

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <Link to={`/listing/${listing.id}`}>
        <ListingImage 
          image={listing.image} 
          title={listing.title} 
          category={listing.category}
          categoryIcon={categoryIcon}
          isFeatured={listing.isFeatured}
        />
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <Calendar className="w-4 h-4 mr-1.5" />
          <span>Dodano: {formatDate(listing.dateAdded)}</span>
        </div>

        <Link to={`/listing/${listing.id}`} className="group">
          <h3 className="text-base font-semibold text-gray-900 line-clamp-2 min-h-[40px] md:text-lg group-hover:text-sea-600 transition-colors">
            {listing.title}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 mb-3 line-clamp-2 md:text-base">
          {listing.description}
        </p>

        <ListingDetails listing={listing} />

        <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
          <div className="text-sea-600 font-bold text-lg md:text-xl">
            {listing.price}
          </div>
          <Link
            to={`/listing/${listing.id}`}
            className="inline-flex items-center px-3 py-1.5 bg-sea-50 text-sea-600 rounded-lg text-sm font-semibold hover:bg-sea-100 transition-colors md:px-4 md:py-2 md:text-base"
          >
            Zobacz
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}