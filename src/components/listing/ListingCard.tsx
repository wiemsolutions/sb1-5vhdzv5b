// Update the existing ListingCard component to use FeaturedBadge
import FeaturedBadge from '../featured/FeaturedBadge';

// In the JSX where the featured badge is rendered:
<div className="relative h-40 md:h-48">
  <img 
    src={listing.image} 
    alt={listing.title} 
    className="w-full h-full object-cover"
    loading="lazy"
  />
  <FeaturedBadge featuredUntil={listing.status.featuredUntil} />
  {/* ... rest of the component */}
</div>