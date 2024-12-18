import { FeaturedListing } from '../../data/featuredListings';
import Carousel from '../ui/Carousel';
import ListingCard from './ListingCard';

interface ListingCarouselProps {
  listings: FeaturedListing[];
}

export default function ListingCarousel({ listings }: ListingCarouselProps) {
  return (
    <Carousel 
      itemWidth={280} 
      gap={12} 
      className="px-4"
      controlClassName="mx-2"
    >
      {listings.map((listing, index) => (
        <div key={index} className="snap-start w-[280px] flex-shrink-0">
          <ListingCard listing={listing} />
        </div>
      ))}
    </Carousel>
  );
}